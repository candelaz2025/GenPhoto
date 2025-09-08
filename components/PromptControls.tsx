// Fix: Provide the implementation for the PromptControls component.
import React, { useState, useEffect, useRef } from 'react';
import { SparklesIcon, VideoIcon } from './IconComponents';
import { AspectRatio, ArtisticStyle } from '../types';
import { examplePrompts } from './PromptExamplesModal'; // Import examples

interface PromptControlsProps {
  prompt: string;
  // FIX: Updated the type of `setPrompt` to allow functional updates.
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  aspectRatio: AspectRatio;
  setAspectRatio: (ratio: AspectRatio) => void;
  style: ArtisticStyle;
  setStyle: (style: ArtisticStyle) => void;
  generationMode: 'image' | 'video';
  setGenerationMode: (mode: 'image' | 'video') => void;
  onSubmit: () => void;
  onOpenExamples: () => void; // New prop to open the modal
  isLoading: boolean;
  isApiConfigured: boolean;
  imageCount: number;
}

const PromptControls: React.FC<PromptControlsProps> = ({ 
    prompt, setPrompt, aspectRatio, setAspectRatio, style, setStyle, generationMode, setGenerationMode, onSubmit, onOpenExamples, isLoading, isApiConfigured, imageCount 
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const promptWrapperRef = useRef<HTMLDivElement>(null);
  const maxLength = 1000;

  const commonKeywords = [
    'photorealistic', 'hyperrealistic', 'hyperdetailed', 'cinematic lighting', 
    'volumetric lighting', '8k resolution', 'masterpiece', 'vibrant colors', 
    'award-winning', 'epic', 'fantasy', 'sci-fi', 'futuristic', 'steampunk',
    'surreal', 'abstract', 'minimalist', 'concept art', 'digital painting',
    'oil painting', 'watercolor', 'character design', 'portrait', 'landscape',
    'low angle shot', 'dramatic lighting', 'soft lighting', 'studio lighting'
  ];

  const styleSuggestions: Record<Exclude<ArtisticStyle, 'Default'>, string[]> = {
    Photorealistic: ['hyperrealistic', 'sharp focus', '8k', 'natural lighting', 'DSLR photo'],
    Anime: ['Ghibli style', '90s anime aesthetic', 'cel shading', 'makoto shinkai', 'manga'],
    Impressionist: ['oil on canvas', 'visible brushstrokes', 'Monet style', 'soft palette', 'en plein air'],
    Cartoon: ['Pixar style', 'Disney animation', 'bold outlines', 'vibrant and saturated', '3D render'],
    Surreal: ['dreamlike', 'Salvador Dali style', 'abstract', 'bizarre', 'psychedelic'],
    Cyberpunk: ['neon lighting', 'futuristic city', 'dystopian', 'high-tech low-life', 'Blade Runner aesthetic'],
    Vintage: ['sepia tone', 'film grain', '1950s photo', 'retro style', 'Polaroid effect'],
    Fantasy: ['epic', 'mythical', 'enchanted', 'magical lighting', 'dragon'],
    'Sci-Fi': ['futuristic', 'spaceship', 'aliens', 'cybernetic', 'neon city'],
    Abstract: ['geometric', 'non-representational', 'bold colors', 'textured', 'chaotic patterns'],
  };

  const adTemplatePrompts = {
    studio: `วางสินค้าที่อัปโหลดบนแท่นโชว์สินค้าทรงเรขาคณิตสีขาวสะอาดตาในสตูดิโอที่มีแสงสว่างนุ่มนวล พื้นหลังเป็นสีพาสเทลเรียบๆ เช่น สีครีมหรือสีฟ้าอ่อน สร้างเงาที่นุ่มนวลใต้สินค้าเพื่อเพิ่มความลึก ทำให้ภาพดูหรูหรา มินิมอล และทันสมัย สไตล์ภาพถ่ายสินค้ามืออาชีพ ความละเอียด 8k`,
    lifestyle: `สร้างภาพเสมือนจริงที่สินค้าที่อัปโหลดกำลังถูกใช้งานในชีวิตประจำวัน เช่น หากเป็นครีมกันแดด ให้วางอยู่บนผ้าเช็ดตัวริมสระว่ายน้ำที่มีแดดสดใส หรือหากเป็นแก้วกาแฟ ให้มีคนกำลังถืออยู่ในร้านกาแฟบรรยากาศอบอุ่น เน้นให้ภาพดูเป็นธรรมชาติและเข้าถึงง่าย แสงสวยงามเหมือนถ่ายตอน Golden Hour สไตล์ภาพถ่ายไลฟ์สไตล์`,
    nature: `จัดวางสินค้าที่อัปโหลดท่ามกลางองค์ประกอบจากธรรมชาติที่สวยงาม เช่น ใบไม้เขียวชอุ่ม ดอกไม้สด หรือบนก้อนหินที่มีมอสเกาะอยู่ แสงแดดส่องลอดผ่านใบไม้ลงมาสร้างลวดลายบนสินค้า ให้ความรู้สึกสดชื่น ออร์แกนิก และเชื่อมโยงกับธรรมชาติ เหมาะสำหรับสินค้าเพื่อสุขภาพหรือความงาม`,
    luxurious: `นำเสนอสินค้าที่อัปโหลดในฉากที่ดูหรูหราและน่าทึ่ง เช่น บนพื้นหลังผ้าไหมสีเข้ม มีควันหรือหมอกบางๆ ลอยอยู่รอบๆ แสงสปอตไลท์ส่องลงมาที่ตัวสินค้าโดยตรงเพื่อสร้างคอนทราสต์ที่ชัดเจน ทำให้สินค้าดูโดดเด่น มีระดับ และน่าค้นหา สไตล์ภาพถ่ายโฆษณาสินค้าหรู`
  };
  
  // Effect for dynamic placeholder
  useEffect(() => {
    if (generationMode === 'video') {
        setPlaceholder("อธิบายวิดีโอที่ต้องการสร้าง เช่น 'แมวอวกาศกำลังขับยานอวกาศ'");
        return;
    }

    if (!examplePrompts || examplePrompts.length === 0) {
        setPlaceholder("เพิ่มคำอธิบาย เช่น 'เพิ่มหมวกวันเกิดให้แมว'...");
        return;
    }

    const initialIndex = Math.floor(Math.random() * examplePrompts.length);
    setPlaceholder(`ลองพิมพ์: "${examplePrompts[initialIndex].title}"`);

    const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * examplePrompts.length);
        const randomExample = examplePrompts[randomIndex];
        setPlaceholder(`ลองพิมพ์: "${randomExample.title}"`);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId);
  }, [generationMode]);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (promptWrapperRef.current && !promptWrapperRef.current.contains(event.target as Node)) {
            setIsSuggestionsVisible(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setPrompt(value);

    const words = value.split(/[\s,]+/);
    const currentWord = words[words.length - 1].toLowerCase();

    if (currentWord.length > 1) {
        let allKeywords = [...commonKeywords];
        if (style !== 'Default' && styleSuggestions[style as Exclude<ArtisticStyle, 'Default'>]) {
            allKeywords.push(...styleSuggestions[style as Exclude<ArtisticStyle, 'Default'>]);
        }
        const uniqueKeywords = [...new Set(allKeywords)];

        const filteredSuggestions = uniqueKeywords.filter(keyword => 
            keyword.toLowerCase().startsWith(currentWord) && !value.toLowerCase().includes(keyword.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0, 5));
        setIsSuggestionsVisible(filteredSuggestions.length > 0);
    } else {
        setSuggestions([]);
        setIsSuggestionsVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const words = prompt.split(' ');
    words[words.length - 1] = suggestion;
    setPrompt(words.join(' ') + ' ');
    setSuggestions([]);
    setIsSuggestionsVisible(false);
    promptWrapperRef.current?.querySelector('textarea')?.focus();
  };

  const handleStyleSuggestionClick = (suggestion: string) => {
    setPrompt(prev => (prev.trim().length > 0 ? `${prev.trim()}, ${suggestion}` : suggestion));
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && isApiConfigured) {
        onSubmit();
      }
    }
  };

  const aspectRatios: { label: string, value: AspectRatio }[] = [
    { label: 'สี่เหลี่ยม', value: '1:1' },
    { label: 'แนวนอน', value: '16:9' },
    { label: 'แนวตั้ง', value: '9:16' },
  ];

  const artisticStyles: { label: string; value: ArtisticStyle }[] = [
    { label: 'ค่าเริ่มต้น', value: 'Default' },
    { label: 'สมจริง', value: 'Photorealistic' },
    { label: 'อนิเมะ', value: 'Anime' },
    { label: 'แฟนตาซี', value: 'Fantasy' },
    { label: 'ไซไฟ', value: 'Sci-Fi' },
    { label: 'นามธรรม', value: 'Abstract' },
    { label: 'อิมเพรสชันนิสม์', value: 'Impressionist' },
    { label: 'การ์ตูน', value: 'Cartoon' },
    { label: 'เหนือจริง', value: 'Surreal' },
    { label: 'ไซเบอร์พังก์', value: 'Cyberpunk' },
    { label: 'วินเทจ', value: 'Vintage' },
  ];

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
            ดูตัวอย่าง Prompt ที่สร้างแรงบันดาลใจ
          </button>
        </div>
      )}
      
      {imageCount > 0 && generationMode === 'image' && (
        <div className="w-full p-3 bg-base-200/50 rounded-lg animate-fade-in space-y-3 border border-brand-secondary/30">
          <h3 className="text-center font-semibold text-content">
            ตัวช่วยสร้างรูปโฆษณาสินค้า
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => setPrompt(adTemplatePrompts.studio)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
              แนวสตูดิโอ
            </button>
            <button onClick={() => setPrompt(adTemplatePrompts.lifestyle)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
              แนวไลฟ์สไตล์
            </button>
            <button onClick={() => setPrompt(adTemplatePrompts.nature)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
              แนวธรรมชาติ
            </button>
            <button onClick={() => setPrompt(adTemplatePrompts.luxurious)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
              แนวหรูหรา
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex flex-col gap-3 items-center">
            <label className="font-semibold text-content">โหมด</label>
            <div className="flex gap-2 p-1 bg-base-200 rounded-lg">
                <button
                    onClick={() => setGenerationMode('image')}
                    disabled={isLoading}
                    className={`px-4 py-1 text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                    generationMode === 'image' ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                    }`}
                >
                    รูปภาพ
                </button>
                <button
                    onClick={() => setGenerationMode('video')}
                    disabled={isLoading}
                    className={`px-4 py-1 text-sm rounded-md transition-colors disabled:cursor-not-allowed ${
                    generationMode === 'video' ? 'bg-brand-primary text-white shadow' : 'hover:bg-base-300'
                    }`}
                >
                    วิดีโอ
                </button>
            </div>
        </div>
        
        {generationMode === 'image' && (
          <>
            <div className="flex flex-col gap-3 items-center animate-fade-in">
              <label className="font-semibold text-content">สไตล์ภาพ</label>
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
              <label className="font-semibold text-content">อัตราส่วนภาพ</label>
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
      
      {generationMode === 'image' && style !== 'Default' && (
        <div className="flex flex-wrap gap-2 justify-center animate-fade-in">
            <span className="text-sm self-center text-gray-400 mr-2">คำแนะนำสำหรับสไตล์ {style}:</span>
            {(styleSuggestions[style as Exclude<ArtisticStyle, 'Default'>] || []).map(suggestion => (
                <button
                    key={suggestion}
                    onClick={() => handleStyleSuggestionClick(suggestion)}
                    className="px-3 py-1 text-xs bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors"
                    aria-label={`เพิ่มคำว่า ${suggestion}`}
                >
                    + {suggestion}
                </button>
            ))}
        </div>
      )}

      <div ref={promptWrapperRef} className="relative w-full">
        {isSuggestionsVisible && suggestions.length > 0 && (
            <div className="absolute z-10 w-full bottom-full mb-1 bg-base-300 border border-base-100 rounded-lg shadow-lg animate-fade-in">
                <ul className="py-1 max-h-48 overflow-y-auto" role="listbox">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-4 py-2 text-sm text-content hover:bg-brand-primary/30 cursor-pointer"
                            role="option"
                            aria-selected="false"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            </div>
        )}
        <textarea
          value={prompt}
          onChange={handlePromptChange}
          onFocus={handlePromptChange}
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
              กรุณาใส่ API Key ของคุณในช่องด้านบนเพื่อเปิดใช้งาน
          </p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
            onClick={onSubmit}
            disabled={commonButtonDisabled}
            className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-colors disabled:bg-base-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-brand-secondary/50"
        >
            {generationMode === 'video' ? <VideoIcon className="w-6 h-6" /> : <SparklesIcon className="w-6 h-6" />}
            <span>{isLoading ? 'กำลังประมวลผล...' : generationMode === 'image' ? 'สร้างรูปภาพ' : 'สร้างวิดีโอ'}</span>
        </button>
      </div>
    </div>
  );
};

export default PromptControls;
