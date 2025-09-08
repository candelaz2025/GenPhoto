import React, { useState, useEffect } from 'react';
import { v4 as uuidvv4 } from 'uuid';

import Header from './components/Header';
import Footer from './components/Footer';
import ImageUploader from './components/ImageUploader';
import ImageGallery from './components/ImageGallery';
import PromptControls from './components/PromptControls';
import ResultDisplay from './components/ResultDisplay';
import HistoryGallery from './components/HistoryGallery';
import Loader from './components/Loader';
import ApiKeyModal from './components/ApiKeyModal';
import PromptExamplesModal from './components/PromptExamplesModal';
import { editImageWithGemini, generateImageWithImagen, generateVideoWithVeo, inpaintImageWithGemini } from './services/geminiService';
import { UploadedImage, Result, HistoryItem, AspectRatio, ArtisticStyle, Language } from './types';
import { translations } from './locales/translations';

// Helper function to convert file to base64
const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = (error) => reject(error);
  });

const DEFAULT_API_KEY = 'P2AMML5VGC4XQVYASFHA73CFAU';

function App() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [prompt, setPrompt] = useState('');
  const [apiKey, setApiKey] = useState<string>('');
  const [apiKeyInput, setApiKeyInput] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem('app-language') as Language) || 'th'
  );
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(
    () => (localStorage.getItem('gemini-aspect-ratio') as AspectRatio) || '1:1'
  );
  const [style, setStyle] = useState<ArtisticStyle>(
    () => (localStorage.getItem('gemini-style') as ArtisticStyle) || 'Default'
  );
  const [result, setResult] = useState<Result | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loadingMode, setLoadingMode] = useState<'image' | 'video' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isExamplesModalOpen, setIsExamplesModalOpen] = useState(false);
  const [generationMode, setGenerationMode] = useState<'image' | 'video'>('image');
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  const t = translations[language];

  // Load API key from local storage on mount, with a default fallback
  useEffect(() => {
    const savedApiKey = localStorage.getItem('gemini-api-key');
    const keyToUse = savedApiKey || DEFAULT_API_KEY;
    setApiKey(keyToUse);
    setApiKeyInput(keyToUse);
  }, []);

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Save preferences to local storage
  useEffect(() => {
    // Avoid saving the default key unless user explicitly saves it
    const savedApiKey = localStorage.getItem('gemini-api-key');
    if (apiKey !== DEFAULT_API_KEY || savedApiKey) {
        if (apiKey) localStorage.setItem('gemini-api-key', apiKey);
        else localStorage.removeItem('gemini-api-key');
    }
  }, [apiKey]);
  
  useEffect(() => {
    localStorage.setItem('gemini-aspect-ratio', aspectRatio);
  }, [aspectRatio]);

  useEffect(() => {
    localStorage.setItem('gemini-style', style);
  }, [style]);

  useEffect(() => {
    localStorage.setItem('app-language', language);
  }, [language]);


  // Load/Save history from/to local storage
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('gemini-image-editor-history');
      if (savedHistory) setHistory(JSON.parse(savedHistory));
    } catch (e) {
      console.error("Failed to load history from localStorage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('gemini-image-editor-history', JSON.stringify(history));
    } catch (e) {
      console.error("Failed to save history to localStorage", e);
    }
  }, [history]);
  
  // Fetch visitor count on mount
  useEffect(() => {
    const fetchVisitorCount = async () => {
        try {
            const response = await fetch('https://api.countapi.xyz/hit/imagegen-nanobanana/visits');
            if (response.ok) {
                const data = await response.json();
                setVisitorCount(data.value);
            }
        } catch (err) {
            console.error("Failed to fetch visitor count:", err);
        }
    };
    fetchVisitorCount();
  }, []);

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
                    id: uuidvv4(), file, base64,
                    previewUrl: URL.createObjectURL(file),
                    mimeType: file.type,
                });
            } catch (err) {
                console.error("Error converting file to base64", err);
                setError(t.error.fileProcessing);
            }
        }
    }
    setImages(prev => [...prev, ...newImages]);
  };
  
  const handleRemoveImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };
  
  const handleError = (err: unknown) => {
    console.error(err);
    setError(err instanceof Error ? err.message : t.error.default);
  };

  const handleSubmit = async () => {
    if (!apiKey) {
      setError(t.error.apiKey);
      return;
    }
    if (!prompt && images.length === 0) {
      setError(t.error.promptOrImage);
      return;
    }
    setLoadingMode(generationMode);
    setError(null);
    setResult(null);

    try {
        if (generationMode === 'video') {
            const apiResult = await generateVideoWithVeo(prompt, images, apiKey, language);
            setResult(apiResult);
        } else {
            if (images.length > 0) {
                const apiResult = await editImageWithGemini(
                    prompt, images, aspectRatio, style, apiKey, language
                );
                setResult(apiResult);
            } else {
                let finalPrompt = prompt;
                if (style !== 'Default') {
                    finalPrompt = prompt + t.service.styleInstruction(t.artisticStyles[style]);
                }
                const apiResult = await generateImageWithImagen(finalPrompt, aspectRatio, apiKey, language);
                setResult(apiResult);
            }
        }
    } catch (err) {
      handleError(err);
    } finally {
      setLoadingMode(null);
    }
  };
  
  const handleRegenerate = async (originalImage: string, maskImage: string, inpaintPrompt: string) => {
    if (!apiKey) {
      setError(t.error.apiKey);
      return Promise.reject(new Error(t.error.apiKey));
    }
    
    setLoadingMode('image');
    setError(null);
    
    try {
        const [header, data] = originalImage.split(',');
        const mimeType = header.match(/:(.*?);/)?.[1] || 'image/png';

        const [maskHeader, maskData] = maskImage.split(',');
        const maskMimeType = maskHeader.match(/:(.*?);/)?.[1] || 'image/png';
        
        const apiResult = await inpaintImageWithGemini(
            inpaintPrompt,
            { base64: data, mimeType },
            { base64: maskData, mimeType: maskMimeType },
            apiKey,
            language
        );
        setResult(apiResult);
        return apiResult;
    } catch (err) {
      handleError(err);
      throw err;
    } finally {
      setLoadingMode(null);
    }
  }

  const handleAddToHistory = (res: Result) => {
    if (res.image && !history.some(item => item.imageUrl === res.image)) {
        const newHistoryItem: HistoryItem = {
            id: uuidvv4(), imageUrl: res.image, text: res.text,
        };
        setHistory(prev => [newHistoryItem, ...prev]);
    }
  };
  
  const handleClearHistory = () => {
    setHistory([]);
  }

  const handleReuseFromHistory = async (imageUrl: string) => {
    if (images.length >= 10) {
        setError(t.error.maxImages);
        return;
    }
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], `reused-${Date.now()}.${blob.type.split('/')[1] || 'png'}`, { type: blob.type });
        
        const base64 = await fileToBase64(file);
        const newImage: UploadedImage = {
            id: uuidvv4(), file, base64,
            previewUrl: URL.createObjectURL(file),
            mimeType: file.type,
        };
        setImages(prev => [...prev, newImage]);
    } catch(err) {
        console.error("Error reusing image from history", err);
        setError(t.error.historyReuse);
    }
  }

  const handleSelectPrompt = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
    setIsExamplesModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-100 text-content font-sans">
      {loadingMode && <Loader mode={loadingMode} t={t} />}
      <ApiKeyModal isOpen={isApiKeyModalOpen} onClose={() => setIsApiKeyModalOpen(false)} t={t} />
      <PromptExamplesModal 
        isOpen={isExamplesModalOpen} 
        onClose={() => setIsExamplesModalOpen(false)}
        onSelectPrompt={handleSelectPrompt}
        t={t}
      />
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main className="container mx-auto p-4 space-y-8">
        <div className="max-w-xl mx-auto p-4 bg-base-200/50 rounded-lg">
          <label htmlFor="api-key-input" className="block font-semibold mb-2 text-center">
            {t.apiKeyLabel}
          </label>
          <div className="flex gap-2">
            <input
              id="api-key-input"
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder={t.apiKeyPlaceholder}
              className="w-full px-3 py-2 bg-base-100 border border-base-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none"
            />
             <button 
                onClick={handleSaveApiKey}
                className="px-4 py-2 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-secondary transition-colors whitespace-nowrap"
              >
                {t.saveButton}
              </button>
          </div>
          {saveSuccess && (
            <p className="text-xs text-green-400 mt-2 text-center">
              {t.saveSuccess}
            </p>
          )}
          <div className="text-xs text-gray-400 mt-2 text-center">
            <p>
              {t.apiKeyInfo}{' '}
              <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="text-brand-light underline hover:text-brand-secondary">
                  {t.getApiKeyLink}
              </a>{' '}
              {t.apiKeyNote}
            </p>
            <button onClick={() => setIsApiKeyModalOpen(true)} className="text-brand-light underline hover:text-brand-secondary font-semibold mt-1">
                {t.getApiKeyButton}
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <p className="text-center text-lg">
            {t.mainDescription}
          </p>

          <ImageUploader onFileChange={handleFileChange} imageCount={images.length} t={t} />

          {images.length > 0 && <ImageGallery images={images} onRemove={handleRemoveImage} t={t} />}

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
            onOpenExamples={() => setIsExamplesModalOpen(true)}
            isLoading={!!loadingMode}
            isApiConfigured={!!apiKey}
            imageCount={images.length}
            t={t}
          />
          
          {error && (
            <div 
              className="w-full p-4 my-2 bg-red-900/50 border border-red-700 text-red-300 rounded-lg text-center flex items-center justify-center gap-3 animate-fade-in"
              role="alert"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {result && <ResultDisplay result={result} onAddToHistory={handleAddToHistory} t={t} onRegenerate={handleRegenerate} />}
        </div>
        
        <HistoryGallery history={history} onClear={handleClearHistory} onReuse={handleReuseFromHistory} t={t} />
        
      </main>
      <Footer visitorCount={visitorCount} t={t} />
    </div>
  );
}

export default App;