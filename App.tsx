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
import PromptExamplesModal from './components/PromptExamplesModal';
import WhatsNewModal from './components/WhatsNewModal';
import ApiKeyModal from './components/ApiKeyModal';
import WatermarkControls from './components/WatermarkControls';
import { editImageWithGemini, generateImageWithImagen, generateVideoWithVeo, inpaintImageWithGemini, upscaleImage } from './services/geminiService';
import { UploadedImage, Result, HistoryItem, AspectRatio, ArtisticStyle, Language, FontStyle, VideoCharacterGender, VideoResolution } from './types';
import { translations, PromptExample } from './locales/translations';

// Helper function to convert file to base64
const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = (error) => reject(error);
  });

const CURRENT_APP_VERSION = '2025-09-08'; // Update this date for new features to trigger the modal

function App() {
  const [apiKey, setApiKey] = useState<string>('');
  const [apiKeyStatus, setApiKeyStatus] = useState<'valid' | 'invalid' | 'idle'>('idle');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  const [images, setImages] = useState<UploadedImage[]>([]);
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem('app-language') as Language) || 'th'
  );
  // Image specific states
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(
    () => (localStorage.getItem('gemini-aspect-ratio') as AspectRatio) || '16:9'
  );
  const [style, setStyle] = useState<ArtisticStyle>(
    () => (localStorage.getItem('gemini-style') as ArtisticStyle) || 'Default'
  );
  const [overlayText, setOverlayText] = useState('');
  const [fontStyle, setFontStyle] = useState<FontStyle>('Default');
  
  // Video specific states
  const [videoAspectRatio, setVideoAspectRatio] = useState<AspectRatio>('9:16');
  const [videoCharacterGender, setVideoCharacterGender] = useState<VideoCharacterGender>('female');
  const [videoResolution, setVideoResolution] = useState<VideoResolution>('720p');
  const [videoScript, setVideoScript] = useState('');

  const [result, setResult] = useState<Result | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loadingMode, setLoadingMode] = useState<'image' | 'video' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isExamplesModalOpen, setIsExamplesModalOpen] = useState(false);
  const [isWhatsNewModalOpen, setIsWhatsNewModalOpen] = useState(false);
  const [generationMode, setGenerationMode] = useState<'image' | 'video'>('image');
  const [watermark, setWatermark] = useState<string | null>(null);
  const [isWatermarkEnabled, setIsWatermarkEnabled] = useState<boolean>(false);

  const t = translations[language];

  // Load API key on initial render
  useEffect(() => {
    const savedKey = localStorage.getItem('gemini-api-key');
    if (savedKey) {
        setApiKey(savedKey);
        setApiKeyStatus('valid');
    } else {
        setApiKeyStatus('invalid');
        setIsApiKeyModalOpen(true);
    }
  }, []);

  // Show "What's New" modal on first visit or after an update
  useEffect(() => {
    const lastSeenVersion = localStorage.getItem('app-last-seen-version');
    if (lastSeenVersion !== CURRENT_APP_VERSION) {
      setIsWhatsNewModalOpen(true);
    }
  }, []);

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Save preferences to local storage
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

  // Load/Save watermark from/to local storage
  useEffect(() => {
    const savedWatermark = localStorage.getItem('gemini-watermark-image');
    if (savedWatermark) setWatermark(savedWatermark);
    const savedEnabled = localStorage.getItem('gemini-watermark-enabled');
    setIsWatermarkEnabled(savedEnabled === 'true');
  }, []);

  useEffect(() => {
    if (watermark) localStorage.setItem('gemini-watermark-image', watermark);
    else localStorage.removeItem('gemini-watermark-image');
  }, [watermark]);
  
  useEffect(() => {
    localStorage.setItem('gemini-watermark-enabled', String(isWatermarkEnabled));
  }, [isWatermarkEnabled]);
  
  const handleCloseWhatsNewModal = () => {
    setIsWhatsNewModalOpen(false);
    localStorage.setItem('app-last-seen-version', CURRENT_APP_VERSION);
  };
  
  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('gemini-api-key', key);
    setApiKeyStatus('valid');
    setIsApiKeyModalOpen(false);
    setError(null); // Clear previous key-related errors
  };

  const handleRemoveApiKey = () => {
    setApiKey('');
    localStorage.removeItem('gemini-api-key');
    setApiKeyStatus('invalid');
    setIsApiKeyModalOpen(false);
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
    const errorMessage = err instanceof Error ? err.message : t.error.default;
    
    // Check for invalid API key error and update status
    const lowerCaseError = errorMessage.toLowerCase();
    if (lowerCaseError.includes('api key not valid') || lowerCaseError.includes('invalid api key') || lowerCaseError.includes('api_key_invalid')) {
        setApiKeyStatus('invalid');
        setIsApiKeyModalOpen(true);
    }

    setError(errorMessage);
  };

  const handleWatermarkUpload = async (file: File) => {
    if (file && file.type.startsWith('image/')) {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setWatermark(reader.result as string);
            setIsWatermarkEnabled(true); // Enable by default on new upload
        };
        reader.onerror = (error) => { throw error; };
      } catch (err) {
        console.error("Error converting watermark file to base64", err);
        setError(t.error.errorWatermarkUpload);
      }
    }
  };

  const handleRemoveWatermark = () => {
    setWatermark(null);
    setIsWatermarkEnabled(false);
  };

  const handleToggleWatermark = (enabled: boolean) => {
    setIsWatermarkEnabled(enabled);
  };

  const applyWatermark = (baseImageSrc: string, watermarkImageSrc: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const baseImage = new Image();
        baseImage.crossOrigin = 'anonymous';
        baseImage.onload = () => {
            const watermarkImage = new Image();
            watermarkImage.crossOrigin = 'anonymous';
            watermarkImage.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = baseImage.naturalWidth;
                canvas.height = baseImage.naturalHeight;
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    return reject(new Error('Could not get canvas context'));
                }

                // Draw the base image
                ctx.drawImage(baseImage, 0, 0);

                // Calculate watermark size and position
                const watermarkScaleRatio = 0.15; // Watermark width will be 15% of base image width
                const watermarkWidth = canvas.width * watermarkScaleRatio;
                const watermarkHeight = watermarkImage.naturalHeight * (watermarkWidth / watermarkImage.naturalWidth);
                const padding = canvas.width * 0.02; // 2% padding from edges

                const x = canvas.width - watermarkWidth - padding;
                const y = canvas.height - watermarkHeight - padding;

                // Draw the watermark with opacity
                ctx.globalAlpha = 0.75;
                ctx.drawImage(watermarkImage, x, y, watermarkWidth, watermarkHeight);

                resolve(canvas.toDataURL('image/png'));
            };
            watermarkImage.onerror = (err) => reject(err);
            watermarkImage.src = watermarkImageSrc;
        };
        baseImage.onerror = (err) => reject(err);
        baseImage.src = baseImageSrc;
    });
  };

  const preSubmitCheck = (): boolean => {
    if (!apiKey) {
      setError(t.error.keyNotSet);
      setIsApiKeyModalOpen(true);
      return false;
    }
    if (!prompt && images.length === 0) {
      setError(t.error.promptOrImage);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!preSubmitCheck()) return;

    setLoadingMode(generationMode);
    setError(null);
    setResult(null);

    const fullPrompt = prompt;

    try {
        let apiResult: Result;
        if (generationMode === 'video') {
            apiResult = await generateVideoWithVeo(
                apiKey,
                fullPrompt,
                images,
                language,
                videoAspectRatio,
                videoResolution,
                videoScript
            );
        } else {
            if (images.length > 0) {
                apiResult = await editImageWithGemini(
                    apiKey, fullPrompt, images, aspectRatio, language, overlayText, fontStyle
                );
            } else {
                apiResult = await generateImageWithImagen(apiKey, fullPrompt, aspectRatio, language, overlayText, fontStyle);
            }
        }

        let finalResult = apiResult;

        if (generationMode === 'image' && isWatermarkEnabled && watermark && apiResult.image) {
            try {
                const watermarkedImage = await applyWatermark(apiResult.image, watermark);
                finalResult = { ...apiResult, image: watermarkedImage };
            } catch (err) {
                console.error("Failed to apply watermark, showing original image.", err);
                setError(t.error.apiError("Could not apply watermark, showing original image."));
            }
        }
        
        setResult(finalResult);

    } catch (err) {
      handleError(err);
    } finally {
      setLoadingMode(null);
    }
  };
  
  const handleRegenerate = async (originalImage: string, maskImage: string, inpaintPrompt: string) => {
    if (!apiKey) {
      setError(t.error.keyNotSet);
      setIsApiKeyModalOpen(true);
      throw new Error(t.error.keyNotSet);
    }
    setLoadingMode('image');
    setError(null);
    
    try {
        const [header, data] = originalImage.split(',');
        const mimeType = header.match(/:(.*?);/)?.[1] || 'image/png';

        const [maskHeader, maskData] = maskImage.split(',');
        const maskMimeType = maskHeader.match(/:(.*?);/)?.[1] || 'image/png';
        
        const apiResult = await inpaintImageWithGemini(
            apiKey,
            inpaintPrompt,
            { base64: data, mimeType },
            { base64: maskData, mimeType: maskMimeType },
            language
        );

        let finalResult = apiResult;
        if (isWatermarkEnabled && watermark && apiResult.image) {
             try {
                const watermarkedImage = await applyWatermark(apiResult.image, watermark);
                finalResult = { ...apiResult, image: watermarkedImage };
            } catch (err) {
                console.error("Failed to apply watermark, showing original image.", err);
                setError(t.error.apiError("Could not apply watermark, showing original image."));
            }
        }

        setResult(finalResult);
        return finalResult;
    } catch (err) {
      handleError(err);
      throw err;
    } finally {
      setLoadingMode(null);
    }
  }

  const handleUpscale = async (currentImage: string, factor: number) => {
    if (!apiKey) {
      setError(t.error.keyNotSet);
      setIsApiKeyModalOpen(true);
      return;
    }
    setLoadingMode('image');
    setError(null);
    try {
      const [header, data] = currentImage.split(',');
      const mimeType = header.match(/:(.*?);/)?.[1] || 'image/png';

      const apiResult = await upscaleImage(apiKey, { base64: data, mimeType }, factor, language);

      let finalResult = apiResult;
      if (isWatermarkEnabled && watermark && apiResult.image) {
        try {
          const watermarkedImage = await applyWatermark(apiResult.image, watermark);
          finalResult = { ...apiResult, image: watermarkedImage };
        } catch (err) {
          console.error("Failed to apply watermark after upscale, showing upscaled image.", err);
          setError(t.error.apiError("Could not apply watermark, showing original image."));
        }
      }
      setResult(finalResult);
    } catch (err) {
      handleError(err);
    } finally {
      setLoadingMode(null);
    }
  };

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

  const handleSelectPrompt = (example: PromptExample) => {
    setPrompt(example.prompt);
    setIsExamplesModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-100 text-content font-sans">
      {loadingMode && <Loader mode={loadingMode} t={t} />}
      <ApiKeyModal 
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onSave={handleSaveApiKey}
        onRemove={handleRemoveApiKey}
        currentKey={apiKey}
        language={language}
        t={t}
      />
      <PromptExamplesModal 
        isOpen={isExamplesModalOpen} 
        onClose={() => setIsExamplesModalOpen(false)}
        onSelectPrompt={handleSelectPrompt}
        t={t}
      />
      <WhatsNewModal 
        isOpen={isWhatsNewModalOpen}
        onClose={handleCloseWhatsNewModal}
        t={t}
      />
      <Header 
        t={t} 
        language={language} 
        setLanguage={setLanguage}
        apiKeyStatus={apiKeyStatus}
        onApiKeyClick={() => setIsApiKeyModalOpen(true)}
      />
      <main className="container mx-auto p-4 space-y-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
          <p className="text-center text-lg">
            {t.mainDescription}
          </p>

          <div className="flex flex-col items-center">
            <label className="font-semibold text-content">{t.modeLabel}</label>
            <div className="flex gap-2 p-1 bg-base-200 rounded-lg">
                <button
                    onClick={() => setGenerationMode('image')}
                    disabled={!!loadingMode}
                    className={`px-4 py-1 text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                    generationMode === 'image' ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                    }`}
                >
                    {t.modeImage}
                </button>
                <button
                    onClick={() => setGenerationMode('video')}
                    disabled={!!loadingMode}
                    className={`px-4 py-1 text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                    generationMode === 'video' ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                    }`}
                >
                    {t.modeVideo}
                </button>
            </div>
          </div>

          <ImageUploader onFileChange={handleFileChange} imageCount={images.length} t={t} />

          {images.length > 0 && <ImageGallery images={images} onRemove={handleRemoveImage} t={t} />}

          <PromptControls
            prompt={prompt}
            setPrompt={setPrompt}
            overlayText={overlayText}
            setOverlayText={setOverlayText}
            fontStyle={fontStyle}
            setFontStyle={setFontStyle}
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
            style={style}
            setStyle={setStyle}
            generationMode={generationMode}
            videoAspectRatio={videoAspectRatio}
            setVideoAspectRatio={setVideoAspectRatio}
            videoCharacterGender={videoCharacterGender}
            setVideoCharacterGender={setVideoCharacterGender}
            videoResolution={videoResolution}
            setVideoResolution={setVideoResolution}
            videoScript={videoScript}
            setVideoScript={setVideoScript}
            onSubmit={handleSubmit}
            onOpenExamples={() => setIsExamplesModalOpen(true)}
            isLoading={!!loadingMode}
            isApiConfigured={apiKeyStatus === 'valid'}
            imageCount={images.length}
            t={t}
          />
          
          <WatermarkControls
            watermark={watermark}
            isWatermarkEnabled={isWatermarkEnabled}
            generationMode={generationMode}
            onWatermarkUpload={handleWatermarkUpload}
            onRemoveWatermark={handleRemoveWatermark}
            onToggleWatermark={handleToggleWatermark}
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

          {result && <ResultDisplay result={result} onAddToHistory={handleAddToHistory} t={t} onRegenerate={handleRegenerate} onUpscale={handleUpscale} isLoading={!!loadingMode} />}
        </div>
        
        <HistoryGallery history={history} onClear={handleClearHistory} onReuse={handleReuseFromHistory} t={t} />
        
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;