import React, { useState, useEffect, useRef } from 'react';
import { SparklesIcon, VideoIcon } from './IconComponents';
import { AspectRatio, ArtisticStyle } from '../types';
import { Translation } from '../locales/translations';

interface PromptControlsProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  aspectRatio: AspectRatio;
  setAspectRatio: (ratio: AspectRatio) => void;
  style: ArtisticStyle;
  setStyle: (style: ArtisticStyle) => void;
  generationMode: 'image' | 'video';
  setGenerationMode: (mode: 'image' | 'video') => void;
  onSubmit: () => void;
  onOpenExamples: () => void;
  isLoading: boolean;
  isApiConfigured: boolean;
  imageCount: number;
  t: Translation;
}

const PromptControls: React.FC<PromptControlsProps> = ({ 
    prompt, setPrompt, aspectRatio, setAspectRatio, style, setStyle, generationMode, setGenerationMode, onSubmit, onOpenExamples, isLoading, isApiConfigured, imageCount, t
}) => {
  const [placeholder, setPlaceholder] = useState('');
  const promptWrapperRef = useRef<HTMLDivElement>(null);
  const maxLength = 1000;

  const adTemplatePrompts = {
    studio: `วางสินค้าที่อัปโหลดบนแท่นโชว์สินค้าทรงเรขาคณิตสีขาวสะอาดตาในสตูดิโอที่มีแสงสว่างนุ่มนวล พื้นหลังเป็นสีพาสเทลเรียบๆ เช่น สีครีมหรือสีฟ้าอ่อน สร้างเงาที่นุ่มนวลใต้สินค้าเพื่อเพิ่มความลึก ทำให้ภาพดูหรูหรา มินิมอล และทันสมัย สไตล์ภาพถ่ายสินค้ามืออาชีพ ความละเอียด 8k`,
    lifestyle: `สร้างภาพเสมือนจริงที่สินค้าที่อัปโหลดกำลังถูกใช้งานในชีวิตประจำวัน เช่น หากเป็นครีมกันแดด ให้วางอยู่บนผ้าเช็ดตัวริมสระว่ายน้ำที่มีแดดสดใส หรือหากเป็นแก้วกาแฟ ให้มีคนกำลังถืออยู่ในร้านกาแฟบรรยากาศอบอุ่น เน้นให้ภาพดูเป็นธรรมชาติและเข้าถึงง่าย แสงสวยงามเหมือนถ่ายตอน Golden Hour สไตล์ภาพถ่ายไลฟ์สไตล์`,
    nature: `จัดวางสินค้าที่อัปโหลดท่ามกลางองค์ประกอบจากธรรมชาติที่สวยงาม เช่น ใบไม้เขียวชอุ่ม ดอกไม้สด หรือบนก้อนหินที่มีมอสเกาะอยู่ แสงแดดส่องลอดผ่านใบไม้ลงมาสร้างลวดลายบนสินค้า ให้ความรู้สึกสดชื่น ออร์แกนิก และเชื่อมโยงกับธรรมชาติ เหมาะสำหรับสินค้าเพื่อสุขภาพหรือความงาม`,
    luxurious: `นำเสนอสินค้าที่อัปโหลดในฉากที่ดูหรูหราและน่าทึ่ง เช่น บนพื้นหลังผ้าไหมสีเข้ม มีควันหรือหมอกบางๆ ลอยอยู่รอบๆ แสงสปอตไลท์ส่องลงมาที่ตัวสินค้าโดยตรงเพื่อสร้างคอนทราสต์ที่ชัดเจน ทำให้สินค้าดูโดดเด่น มีระดับ และน่าค้นหา สไตล์ภาพถ่ายโฆษณาสินค้าหรู`
  };
  
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

  const aspectRatios: { label: string, value: AspectRatio }[] = [
    { label: t.aspectRatioSquare, value: '1:1' },
    { label: t.aspectRatioLandscape, value: '16:9' },
    { label: t.aspectRatioPortrait, value: '9:16' },
  ];

  const artisticStyles: { label: string; value: ArtisticStyle }[] = Object.entries(t.artisticStyles).map(([value, label]) => ({
      label,
      value: value as ArtisticStyle
  }));

  const commonButtonDisabled = isLoading || !isApiConfigured;

  return (
    <div className="w-full flex flex-col space-y-4">
      
      {generationMode === 'image' && (
        <div className="flex justify-center">
          <button 
            onClick={onOpenExamples} 
            className="px-6 py-2 text-md bg-gradient-to-r from-brand-secondary to-brand-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-brand-primary hover:to-brand-secondary transition-all transform hover:scale-105 animate-fade-in flex items-center gap-2"
          >
            <SparklesIcon className="w-5 h-5" />
            {t.inspiringPromptsButton}
          </button>
        </div>
      )}
      
      {imageCount > 0 && generationMode === 'image' && (
        <div className="w-full p-3 bg-base-200/50 rounded-lg animate-fade-in space-y-3 border border-brand-secondary/30">
          <h3 className="text-center font-semibold text-content">
            {t.adHelperTitle}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => setPrompt(adTemplatePrompts.studio)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
              {t.adHelperStudio}
            </button>
            <button onClick={() => setPrompt(adTemplatePrompts.lifestyle)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
              {t.adHelperLifestyle}
            </button>
            <button onClick={() => setPrompt(adTemplatePrompts.nature)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
              {t.adHelperNature}
            </button>
            <button onClick={() => setPrompt(adTemplatePrompts.luxurious)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
              {t.adHelperLuxurious}
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex flex-col gap-3 items-center">
            <label className="font-semibold text-content">{t.modeLabel}</label>
            <div className="flex gap-2 p-1 bg-base-200 rounded-lg">
                <button
                    onClick={() => setGenerationMode('image')}
                    disabled={isLoading}
                    className={`px-4 py-1 text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                    generationMode === 'image' ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                    }`}
                >
                    {t.modeImage}
                </button>
                <button
                    onClick={() => setGenerationMode('video')}
                    disabled={isLoading}
                    className={`px-4 py-1 text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                    generationMode === 'video' ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                    }`}
                >
                    {t.modeVideo}
                </button>
            </div>
        </div>
        
        {generationMode === 'image' && (
          <>
            <div className="flex flex-col gap-3 items-center animate-fade-in">
              <label className="font-semibold text-content">{t.styleLabel}</label>
              <div className="flex flex-wrap gap-2 p-1 bg-base-200 rounded-lg justify-center">
                {artisticStyles.map(({ label, value }) => (
                  <button
                    key={value}
                    onClick={() => setStyle(value)}
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

            <div className="flex flex-col gap-3 items-center animate-fade-in">
              <label className="font-semibold text-content">{t.aspectRatioLabel}</label>
              <div className="flex gap-2 p-1 bg-base-200 rounded-lg">
                {aspectRatios.map(({ label, value }) => (
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
          </>
        )}
      </div>

      <div ref={promptWrapperRef} className="relative w-full">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full p-4 pb-6 pr-20 bg-base-200/50 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow resize-none"
          rows={3}
          disabled={commonButtonDisabled}
          maxLength={maxLength}
        />
        <div className="absolute bottom-2 right-3 text-xs text-gray-500 pointer-events-none">
          {prompt.length} / {maxLength}
        </div>
      </div>

      {!isApiConfigured && (
          <p className="text-center text-yellow-400 text-sm -mt-2">
              {t.apiNotConfigured}
          </p>
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
