import React, { useState, useEffect, useRef } from 'react';
import { SparklesIcon, VideoIcon, ExternalLinkIcon } from './IconComponents';
import { AspectRatio, ArtisticStyle, FontStyle, VideoCharacterGender, VideoResolution } from '../types';
import { Translation } from '../locales/translations';

interface PromptControlsProps {
  promptTitle: string;
  setPromptTitle: React.Dispatch<React.SetStateAction<string>>;
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  overlayText: string;
  setOverlayText: React.Dispatch<React.SetStateAction<string>>;
  fontStyle: FontStyle;
  setFontStyle: (style: FontStyle) => void;
  aspectRatio: AspectRatio;
  setAspectRatio: (ratio: AspectRatio) => void;
  style: ArtisticStyle;
  setStyle: (style: ArtisticStyle) => void;
  generationMode: 'image' | 'video';
  videoAspectRatio: AspectRatio;
  setVideoAspectRatio: (ratio: AspectRatio) => void;
  videoCharacterGender: VideoCharacterGender;
  setVideoCharacterGender: (gender: VideoCharacterGender) => void;
  videoResolution: VideoResolution;
  setVideoResolution: (resolution: VideoResolution) => void;
  videoScript: string;
  setVideoScript: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  onOpenExamples: () => void;
  isLoading: boolean;
  isApiConfigured: boolean;
  imageCount: number;
  t: Translation;
}

const PromptControls: React.FC<PromptControlsProps> = ({ 
    promptTitle, setPromptTitle, prompt, setPrompt, overlayText, setOverlayText, fontStyle, setFontStyle,
    aspectRatio, setAspectRatio, style, setStyle, generationMode, 
    videoAspectRatio, setVideoAspectRatio, videoCharacterGender, setVideoCharacterGender,
    videoResolution, setVideoResolution, videoScript, setVideoScript,
    onSubmit, onOpenExamples, isLoading, isApiConfigured, imageCount, t
}) => {
  const [placeholder, setPlaceholder] = useState('');
  const promptWrapperRef = useRef<HTMLDivElement>(null);
  const mainPromptMaxLength = 1000;
  const textOverlayMaxLength = 300;
  const videoScriptMaxLength = 1000;

  // Effect for dynamic placeholder
  useEffect(() => {
    if (generationMode === 'video') {
        setPlaceholder(t.promptPlaceholderVideo);
        return;
    }
    const examples = t.promptExamples;
    if (!examples || examples.length === 0) {
        setPlaceholder(t.promptPlaceholderDefault);
        return;
    }

    const initialIndex = Math.floor(Math.random() * examples.length);
    setPlaceholder(t.promptPlaceholderImage(examples[initialIndex].title));

    const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * examples.length);
        setPlaceholder(t.promptPlaceholderImage(examples[randomIndex].title));
    }, 4000);

    return () => clearInterval(intervalId);
  }, [generationMode, t]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && isApiConfigured) {
        onSubmit();
      }
    }
  };

  const handleStyleChange = (newStyleValue: ArtisticStyle) => {
    const oldStyleValue = style;
    let newPromptText = prompt;
    
    // If there was a previous style, try to remove its instruction from the prompt
    if (oldStyleValue !== 'Default') {
        const oldStyleText = t.artisticStyles[oldStyleValue];
        const oldInstructionWithPrompt = t.service.styleInstruction(oldStyleText).trim();
        const oldInstructionWithoutPrompt = t.service.styleInstructionNoPrompt(oldStyleText).trim();

        newPromptText = newPromptText.replace(oldInstructionWithPrompt, '').trim();
        newPromptText = newPromptText.replace(oldInstructionWithoutPrompt, '').trim();
    }
    
    // If the new style is not 'Default', add its instruction
    if (newStyleValue !== 'Default') {
        const newStyleText = t.artisticStyles[newStyleValue];
        let newInstruction = '';

        const hasBasePrompt = newPromptText.trim().length > 0;
        if (imageCount > 0 && !hasBasePrompt) {
            newInstruction = t.service.styleInstructionNoPrompt(newStyleText).trim();
        } else {
            newInstruction = t.service.styleInstruction(newStyleText).trim();
        }
        
        newPromptText = (newPromptText ? newPromptText + ' ' : '') + newInstruction;
    }

    setPrompt(newPromptText);
    setStyle(newStyleValue);
  };

  const handleVideoPromptTemplate = (template: 'review' | 'unboxing' | 'lifestyle' | 'showcase') => {
      const character = t.service.videoCharacter[videoCharacterGender];
      let generatedPrompt = '';
      switch (template) {
          case 'review':
              setPromptTitle(t.videoAdHelperReview);
              generatedPrompt = t.service.videoPromptReview(character, videoAspectRatio);
              break;
          case 'unboxing':
              setPromptTitle(t.videoAdHelperUnboxing);
              generatedPrompt = t.service.videoPromptUnboxing(character, videoAspectRatio);
              break;
          case 'lifestyle':
              setPromptTitle(t.videoAdHelperLifestyle);
              generatedPrompt = t.service.videoPromptLifestyle(character, videoAspectRatio);
              break;
          case 'showcase':
              setPromptTitle(t.videoAdHelperShowcase);
              generatedPrompt = t.service.videoPromptShowcase(videoAspectRatio);
              break;
      }
      setPrompt(generatedPrompt);
  };

  const imageAspectRatios: { label: string, value: AspectRatio }[] = [
    { label: t.aspectRatioSquare, value: '1:1' },
    { label: t.aspectRatioLandscape, value: '16:9' },
    { label: t.aspectRatioPortrait, value: '9:16' },
  ];

  const videoAspectRatios: { label: string, value: AspectRatio }[] = [
    { label: t.aspectRatioPortrait, value: '9:16' },
    { label: t.aspectRatioLandscape, value: '16:9' },
  ];

  const videoResolutions: { label: string, value: VideoResolution }[] = [
    { label: '480p', value: '480p' },
    { label: '720p', value: '720p' },
    { label: '1080p', value: '1080p' },
  ];

  const artisticStyles: { label: string; value: ArtisticStyle }[] = Object.entries(t.artisticStyles).map(([value, label]) => ({
      label,
      value: value as ArtisticStyle
  }));

  const fontStyles: { label: string; value: FontStyle }[] = Object.entries(t.fontStyles).map(([value, label]) => ({
      label,
      value: value as FontStyle
  }));

  const commonButtonDisabled = isLoading || !isApiConfigured;

  return (
    <div className="w-full flex flex-col space-y-4">
      
      {generationMode === 'image' && (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <button 
                onClick={onOpenExamples} 
                className="px-6 py-2 text-md bg-gradient-to-r from-brand-secondary to-brand-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-brand-primary hover:to-brand-secondary transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <SparklesIcon className="w-5 h-5" />
                {t.inspiringPromptsButton}
              </button>
              <a 
                href="https://github.com/PicoTrex/Awesome-Nano-Banana-images/blob/main/README_en.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-brand-light border border-brand-secondary/50 rounded-lg hover:bg-brand-secondary/20 transition-colors flex items-center gap-2"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>{t.promptArsenalLink}</span>
              </a>
            </div>
          
            {generationMode === 'image' && imageCount === 0 && (
              <div className="w-full p-3 bg-base-200/50 rounded-lg animate-fade-in space-y-3 border border-brand-secondary/30">
                <h3 className="text-center font-semibold text-content">
                  {t.poseHelperTitle}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button onClick={() => { setPromptTitle(t.poseHelperCloseUp); setPrompt(t.service.poseHelperPrompts.closeUp); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                    {t.poseHelperCloseUp}
                  </button>
                  <button onClick={() => { setPromptTitle(t.poseHelperFullBody); setPrompt(t.service.poseHelperPrompts.fullBody); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                    {t.poseHelperFullBody}
                  </button>
                  <button onClick={() => { setPromptTitle(t.poseHelperLowAngle); setPrompt(t.service.poseHelperPrompts.lowAngle); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                    {t.poseHelperLowAngle}
                  </button>
                  <button onClick={() => { setPromptTitle(t.poseHelperHighAngle); setPrompt(t.service.poseHelperPrompts.highAngle); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                    {t.poseHelperHighAngle}
                  </button>
                   <button onClick={() => { setPromptTitle(t.poseHelperProfile); setPrompt(t.service.poseHelperPrompts.profile); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                     {t.poseHelperProfile}
                   </button>
                   <button onClick={() => { setPromptTitle(t.poseHelperEyeLevel); setPrompt(t.service.poseHelperPrompts.eyeLevel); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                     {t.poseHelperEyeLevel}
                   </button>
                </div>
              </div>
            )}

            {imageCount > 0 && (
                <div className="w-full p-3 bg-base-200/50 rounded-lg animate-fade-in space-y-3 border border-brand-secondary/30">
                  <h3 className="text-center font-semibold text-content">
                    {t.adHelperTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button onClick={() => { setPromptTitle(t.adHelperStudio); setPrompt(t.service.adHelperPrompts.studio); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                      {t.adHelperStudio}
                    </button>
                    <button onClick={() => { setPromptTitle(t.adHelperLifestyle); setPrompt(t.service.adHelperPrompts.lifestyle); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                      {t.adHelperLifestyle}
                    </button>
                    <button onClick={() => { setPromptTitle(t.adHelperNature); setPrompt(t.service.adHelperPrompts.nature); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                      {t.adHelperNature}
                    </button>
                    <button onClick={() => { setPromptTitle(t.adHelperLuxurious); setPrompt(t.service.adHelperPrompts.luxurious); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                      {t.adHelperLuxurious}
                    </button>
                     <button onClick={() => { setPromptTitle(t.adHelperProductMockup); setPrompt(t.service.adHelperPrompts.productMockup); }} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
                       {t.adHelperProductMockup}
                     </button>
                  </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center animate-fade-in">
                <div className="flex flex-col gap-3 items-center">
                  <label className="font-semibold text-content">{t.styleLabel}</label>
                  <div className="flex flex-wrap gap-2 p-1 bg-base-200 rounded-lg justify-center">
                    {artisticStyles.map(({ label, value }) => (
                      <button
                        key={value}
                        onClick={() => handleStyleChange(value)}
                        disabled={isLoading}
                        className={`px-4 py-1 text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                          style === value ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 items-center">
                  <label className="font-semibold text-content">{t.aspectRatioLabel}</label>
                  <div className="flex gap-2 p-1 bg-base-200 rounded-lg">
                    {imageAspectRatios.map(({ label, value }) => (
                      <button
                        key={value}
                        onClick={() => setAspectRatio(value)}
                        disabled={isLoading}
                        className={`px-4 py-1 text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                          aspectRatio === value ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                        }`}
                      >
                        {label} ({value})
                      </button>
                    ))}
                  </div>
                </div>
            </div>
        </>
      )}

      {generationMode === 'video' && (
          <div className="w-full p-3 bg-base-200/50 rounded-lg animate-fade-in space-y-4 border border-brand-secondary/30">
            <h3 className="text-center font-semibold text-content">{t.videoAdHelperTitle}</h3>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="flex items-center gap-3">
                    <label className="font-semibold text-content">{t.videoAspectRatioLabel}</label>
                    <div className="flex gap-2 p-1 bg-base-200 rounded-lg">
                        {videoAspectRatios.map(({ label, value }) => (
                            <button key={value} onClick={() => setVideoAspectRatio(value)} disabled={isLoading} className={`px-4 py-1 text-sm rounded-md transition-colors ${videoAspectRatio === value ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'}`}>{label} ({value})</button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <label className="font-semibold text-content">{t.videoResolutionLabel}</label>
                    <div className="flex gap-2 p-1 bg-base-200 rounded-lg">
                        {videoResolutions.map(({ label, value }) => (
                            <button key={value} onClick={() => setVideoResolution(value)} disabled={isLoading} className={`px-4 py-1 text-sm rounded-md transition-colors ${videoResolution === value ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'}`}>{label}</button>
                        ))}
                    </div>
                </div>
            </div>
            
            {imageCount > 0 && (
              <div className="space-y-4 pt-4 border-t border-base-300/50">
                <div className="flex items-center justify-center gap-3">
                    <label className="font-semibold text-content">{t.videoAdHelperCharacterLabel}</label>
                    <div className="flex gap-2 p-1 bg-base-200 rounded-lg">
                        <button onClick={() => setVideoCharacterGender('female')} disabled={isLoading} className={`px-4 py-1 text-sm rounded-md transition-colors ${videoCharacterGender === 'female' ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'}`}>{t.videoAdHelperCharacterFemale}</button>
                        <button onClick={() => setVideoCharacterGender('male')} disabled={isLoading} className={`px-4 py-1 text-sm rounded-md transition-colors ${videoCharacterGender === 'male' ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'}`}>{t.videoAdHelperCharacterMale}</button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <button onClick={() => handleVideoPromptTemplate('review')} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">{t.videoAdHelperReview}</button>
                  <button onClick={() => handleVideoPromptTemplate('unboxing')} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">{t.videoAdHelperUnboxing}</button>
                  <button onClick={() => handleVideoPromptTemplate('lifestyle')} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">{t.videoAdHelperLifestyle}</button>
                  <button onClick={() => handleVideoPromptTemplate('showcase')} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">{t.videoAdHelperShowcase}</button>
                </div>
              </div>
            )}
          </div>
      )}

      <div className="w-full p-4 bg-base-200/50 rounded-lg space-y-3">
        <label htmlFor="prompt-title-input" className="block text-sm font-semibold text-content">{t.promptTitleLabel}</label>
        <input
            id="prompt-title-input"
            type="text"
            value={promptTitle}
            onChange={(e) => setPromptTitle(e.target.value)}
            placeholder={t.promptTitlePlaceholder}
            className="w-full px-3 py-2 bg-base-100 border border-base-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none"
            disabled={commonButtonDisabled}
        />
        <div ref={promptWrapperRef} className="relative w-full">
            <label htmlFor="prompt-body-input" className="sr-only">{t.promptPlaceholderDefault}</label>
            <textarea
            id="prompt-body-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full p-4 pb-6 pr-20 bg-base-100 border border-base-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow resize-none"
            rows={3}
            disabled={commonButtonDisabled}
            maxLength={mainPromptMaxLength}
            />
            <div className="absolute bottom-2 right-3 text-xs text-gray-500 pointer-events-none">
            {prompt.length} / {mainPromptMaxLength}
            </div>
        </div>
      </div>

      {generationMode === 'video' && (
            <div className="w-full p-3 bg-base-200/50 rounded-lg animate-fade-in space-y-3 border border-base-300">
                <label htmlFor="video-script-input" className="block font-semibold text-center text-content">
                    {t.videoScriptLabel}
                </label>
                <div className="relative">
                    <textarea
                        id="video-script-input"
                        value={videoScript}
                        onChange={(e) => setVideoScript(e.target.value)}
                        placeholder={t.videoScriptPlaceholder}
                        className="w-full p-2 pr-20 bg-base-100 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow resize-none"
                        rows={2}
                        disabled={commonButtonDisabled}
                        maxLength={videoScriptMaxLength}
                    />
                    <div className="absolute bottom-2 right-3 text-xs text-gray-500 pointer-events-none">
                        {videoScript.length} / {videoScriptMaxLength}
                    </div>
                </div>
            </div>
      )}

      {generationMode === 'image' && (
        <div className="w-full p-3 bg-base-200/50 rounded-lg animate-fade-in space-y-3 border border-base-300">
            <label htmlFor="text-overlay-input" className="block font-semibold text-center text-content">
                {t.addTextToImageLabel}
            </label>
            <div className="relative">
                <textarea
                    id="text-overlay-input"
                    value={overlayText}
                    onChange={(e) => setOverlayText(e.target.value)}
                    placeholder={t.addTextPlaceholder}
                    className="w-full p-2 pr-20 bg-base-100 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow resize-none"
                    rows={2}
                    disabled={commonButtonDisabled}
                    maxLength={textOverlayMaxLength}
                />
                <div className="absolute bottom-2 right-3 text-xs text-gray-500 pointer-events-none">
                    {overlayText.length} / {textOverlayMaxLength}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <label className="font-semibold text-content whitespace-nowrap">{t.fontStyleLabel}</label>
                <div className="flex flex-wrap gap-2 p-1 bg-base-100 rounded-lg justify-center">
                    {fontStyles.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setFontStyle(value)}
                            disabled={isLoading}
                            className={`px-3 py-1 text-xs sm:text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                            fontStyle === value ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
            onClick={onSubmit}
            disabled={commonButtonDisabled}
            className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-colors disabled:bg-base-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-brand-secondary/50"
        >
            {generationMode === 'video' ? <VideoIcon className="w-6 h-6" /> : <SparklesIcon className="w-6 h-6" />}
            <span>{isLoading ? t.processingButton : (generationMode === 'image' ? t.generateImageButton : t.generateVideoButton)}</span>
        </button>
      </div>
    </div>
  );
};

export default PromptControls;