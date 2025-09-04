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
import { editImageWithGemini, generateVideoWithGemini } from './services/geminiService';
import { UploadedImage, Result, HistoryItem, AspectRatio } from './types';

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
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');
  const [result, setResult] = useState<Result | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loadingMode, setLoadingMode] = useState<'image' | 'video' | null>(null);
  const [error, setError] = useState<string | null>(null);

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
    if (!prompt && images.length === 0) {
      setError('กรุณาใส่คำอธิบายหรืออัปโหลดรูปภาพอย่างน้อยหนึ่งภาพ');
      return;
    }
    setLoadingMode('image');
    setError(null);
    setResult(null);

    try {
      const apiResult = await editImageWithGemini(prompt, images, aspectRatio);
      setResult(apiResult);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดที่ไม่คาดคิด');
    } finally {
      setLoadingMode(null);
    }
  };
  
  const handleVideoSubmit = async () => {
    if (images.length === 0) {
      setError('การสร้างวิดีโอต้องการรูปภาพอ้างอิงอย่างน้อยหนึ่งภาพ');
      return;
    }
    setLoadingMode('video');
    setError(null);
    setResult(null);

    try {
      const apiResult = await generateVideoWithGemini(prompt, images);
      setResult(apiResult);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดที่ไม่คาดคิด');
    } finally {
      setLoadingMode(null);
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
      <Header />
      <main className="container mx-auto p-4 space-y-8">
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
            onSubmit={handleSubmit}
            onVideoSubmit={handleVideoSubmit}
            isLoading={!!loadingMode}
            isVideoButtonDisabled={images.length === 0}
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