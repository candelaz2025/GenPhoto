import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Footer from './components/Footer';
import ImageUploader from './components/ImageUploader';
import ImageGallery from './components/ImageGallery';
import PromptControls from './components/PromptControls';
import ResultDisplay from './components/ResultDisplay';
import HistoryGallery from './components/HistoryGallery';
import Loader from './components/Loader';
import ApiKeyModal from './components/ApiKeyModal'; // Import the new modal
import { editImageWithGemini, generateImageWithImagen, generateVideoWithVeo, generatePromptFromImages, generateRandomCreativePrompt } from './services/geminiService';
import { UploadedImage, Result, HistoryItem, AspectRatio, ArtisticStyle } from './types';

// Helper function to convert file to base64
const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = (error) => reject(error);
  });


function App() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [prompt, setPrompt] = useState('');
  const [apiKey, setApiKey] = useState<string>('');
  const [apiKeyInput, setApiKeyInput] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');
  const [style, setStyle] = useState<ArtisticStyle>('Default');
  const [result, setResult] = useState<Result | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loadingMode, setLoadingMode] = useState<'image' | 'video' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false); // State for the modal
  const [generationMode, setGenerationMode] = useState<'image' | 'video'>('image');


  // Load API key from local storage on mount, or use the default
  useEffect(() => {
    const savedApiKey = localStorage.getItem('gemini-api-key');
    const defaultApiKey = 'P2AMML5VGC4XQVYASFHA73CFAU';

    if (savedApiKey) {
      setApiKey(savedApiKey);
      setApiKeyInput(savedApiKey);
    } else {
      setApiKey(defaultApiKey);
      setApiKeyInput(defaultApiKey);
    }
  }, []);

  // Save API key to local storage when it changes
  useEffect(() => {
    if (apiKey) {
      localStorage.setItem('gemini-api-key', apiKey);
    } else {
      localStorage.removeItem('gemini-api-key');
    }
  }, [apiKey]);

  // Load history from local storage on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('gemini-image-editor-history');
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (e) {
      console.error("Failed to load history from localStorage", e);
    }
  }, []);

  // Save history to local storage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('gemini-image-editor-history', JSON.stringify(history));
    } catch (e) {
      console.error("Failed to save history to localStorage", e);
    }
  }, [history]);
  
  const handleSaveApiKey = () => {
    setApiKey(apiKeyInput);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleFileChange = async (files: FileList | null) => {
    if (!files) return;
    
    const newImages: UploadedImage[] = [];
    const fileLimit = 10 - images.length;

    for (let i = 0; i < Math.min(files.length, fileLimit); i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
            try {
                const base64 = await fileToBase64(file);
                newImages.push({
                    id: uuidv4(),
                    file,
                    previewUrl: URL.createObjectURL(file),
                    base64,
                    mimeType: file.type,
                });
            } catch (err) {
                console.error("Error converting file to base64", err);
                setError("เกิดข้อผิดพลาดในการประมวลผลไฟล์ภาพ");
            }
        }
    }
    setImages(prev => [...prev, ...newImages]);
  };
  
  const handleRemoveImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };
  
  const handleSubmit = async () => {
    if (!apiKey) {
      setError('กรุณาใส่ API Key ของคุณก่อนใช้งาน');
      return;
    }
    if (!prompt && images.length === 0) {
      setError('กรุณาใส่คำอธิบายหรืออัปโหลดรูปภาพอย่างน้อยหนึ่งภาพ');
      return;
    }
    setLoadingMode(generationMode);
    setError(null);
    setResult(null);

    try {
        if (generationMode === 'video') {
            const apiResult = await generateVideoWithVeo(prompt, images, apiKey);
            setResult(apiResult);
        } else {
            if (images.length > 0) {
                const apiResult = await editImageWithGemini(
                    prompt,
                    images,
                    aspectRatio,
                    style,
                    apiKey
                );
                setResult(apiResult);
            } else {
                let finalPrompt = prompt;
                if (style !== 'Default') {
                    const styleInstruction = `\n\nคำสั่งเพิ่มเติม: ช่วยสร้างภาพนี้ในสไตล์ ${style}`;
                    finalPrompt = prompt + styleInstruction;
                }
                const apiResult = await generateImageWithImagen(finalPrompt, aspectRatio, apiKey);
                setResult(apiResult);
            }
        }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดที่ไม่คาดคิด');
    } finally {
      setLoadingMode(null);
    }
  };

  const handleRandomPrompt = async () => {
    if (!apiKey) {
      setError('กรุณาใส่ API Key ของคุณก่อนใช้งาน');
      return;
    }
    setError(null);
    try {
       const newPrompt = images.length > 0
        ? await generatePromptFromImages(images, apiKey)
        : await generateRandomCreativePrompt(apiKey);
      setPrompt(newPrompt);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการสร้างคำสั่ง');
    }
  };

  const handleAddToHistory = (res: Result) => {
    if (res.image && !history.some(item => item.imageUrl === res.image)) {
        const newHistoryItem: HistoryItem = {
            id: uuidv4(),
            imageUrl: res.image,
            text: res.text,
        };
        setHistory(prev => [newHistoryItem, ...prev]);
    }
  };
  
  const handleClearHistory = () => {
    setHistory([]);
  }

  const handleReuseFromHistory = async (imageUrl: string) => {
    if (images.length >= 10) {
        setError("คุณสามารถอัปโหลดได้สูงสุด 10 ภาพ");
        return;
    }
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], `reused-${Date.now()}.${blob.type.split('/')[1] || 'png'}`, { type: blob.type });
        
        const base64 = await fileToBase64(file);
        const newImage: UploadedImage = {
            id: uuidv4(),
            file,
            previewUrl: URL.createObjectURL(file),
            base64,
            mimeType: file.type,
        };

        setImages(prev => [...prev, newImage]);

    } catch(err) {
        console.error("Error reusing image from history", err);
        setError("ไม่สามารถนำรูปภาพจากประวัติกลับมาใช้ใหม่ได้");
    }
  }


  return (
    <div className="min-h-screen bg-base-100 text-content font-sans">
      {loadingMode && <Loader mode={loadingMode} />}
      <ApiKeyModal isOpen={isApiKeyModalOpen} onClose={() => setIsApiKeyModalOpen(false)} />
      <Header />
      <main className="container mx-auto p-4 space-y-8">
        <div className="max-w-xl mx-auto p-4 bg-base-200/50 rounded-lg">
          <label htmlFor="api-key-input" className="block font-semibold mb-2 text-center">
            Google AI API Key
          </label>
          <div className="flex gap-2">
            <input
              id="api-key-input"
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder="ใส่ API Key ของคุณที่นี่..."
              className="w-full px-3 py-2 bg-base-100 border border-base-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none"
            />
             <button 
                onClick={handleSaveApiKey}
                className="px-4 py-2 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-secondary transition-colors whitespace-nowrap"
              >
                บันทึก
              </button>
          </div>
          {saveSuccess && (
            <p className="text-xs text-green-400 mt-2 text-center">
              บันทึก API Key เรียบร้อยแล้ว!
            </p>
          )}
          <div className="text-xs text-gray-400 mt-2 text-center">
            <p>
              แอปพลิเคชันนี้ต้องใช้ Gemini API Key จาก{' '}
              <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="text-brand-light underline hover:text-brand-secondary">
                  Google AI Studio
              </a>{' '}
              ของคุณเอง คีย์จะถูกบันทึกไว้ในเบราว์เซอร์ของคุณเท่านั้น
            </p>
            <button onClick={() => setIsApiKeyModalOpen(true)} className="text-brand-light underline hover:text-brand-secondary font-semibold mt-1">
                วิธีรับ API Key?
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <p className="text-center text-lg">
            อัปโหลดรูปภาพและใช้ AI ช่วยแก้ไข เพิ่ม หรือลบวัตถุ เปลี่ยนสไตล์ และอื่นๆ อีกมากมาย!
          </p>

          <ImageUploader onFileChange={handleFileChange} imageCount={images.length} />

          {images.length > 0 && <ImageGallery images={images} onRemove={handleRemoveImage} />}

          <PromptControls
            prompt={prompt}
            setPrompt={setPrompt}
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
            style={style}
            setStyle={setStyle}
            generationMode={generationMode}
            setGenerationMode={setGenerationMode}
            onSubmit={handleSubmit}
            onRandomPrompt={handleRandomPrompt}
            isLoading={!!loadingMode}
            isApiConfigured={!!apiKey}
          />
          
          {error && <div className="text-red-500 bg-red-100 p-3 rounded-lg text-center">{error}</div>}

          {result && <ResultDisplay result={result} onAddToHistory={handleAddToHistory} />}
        </div>
        
        <HistoryGallery history={history} onClear={handleClearHistory} onReuse={handleReuseFromHistory} />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;