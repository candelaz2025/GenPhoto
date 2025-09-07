// Fix: Provide the implementation for the PromptControls component.
import React, { useState, useEffect, useRef } from 'react';
import { SparklesIcon, MagicWandIcon } from './IconComponents';
import { AspectRatio, ArtisticStyle } from '../types';

interface PromptControlsProps {
  prompt: string;
  // FIX: Updated the type of `setPrompt` to allow functional updates.
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  aspectRatio: AspectRatio;
  setAspectRatio: (ratio: AspectRatio) => void;
  style: ArtisticStyle;
  setStyle: (style: ArtisticStyle) => void;
  onSubmit: () => void;
  onRandomPrompt: () => void;
  isLoading: boolean;
  isApiConfigured: boolean;
}

const balloonPrompt = `Using the reference face, generate a Pixar-style 3D balloon caricature with ultra-detailed sculpted skin, glossy shine, oversized cheeks, and a balloon knot at the bottom with a balloon string extending downward, while preserving the exact hairstyle and facial proportions from the reference. Maintain the closed-eye kissing expression with cinematic DOF and polished surreal toy-like aesthetics, using the same background and lighting as in the reference image.`;
const figure3dPrompt = `Create an ultra-high-resolution, hyper-realistic dashboard doll of the person in the attached photo.
The doll must accurately replicate the person’s facial features, hairstyle, clothing, and pose exactly as in the original image.
Place the doll on a car dashboard, fixed on a small round spring-mounted base that allows gentle bobble-head movement.
The doll should have a premium collectible design with lifelike proportions but slightly stylized for a dashboard figure, featuring articulated details at the neck for subtle nodding movement.
Beside the doll, include a miniature packaging box placed on the dashboard — the box should display the same figure inside and feature printed artwork of the person on its exterior design.
The car interior should be realistically detailed: textured dashboard surface, windshield reflections, subtle sunlight streaming in, and blurred city street scenery visible outside the windshield for depth of field.
Lighting should be natural and cinematic, with realistic highlights, soft shadows, and high dynamic range to emphasize realism.
Textures should be ultra-detailed: smooth plastic finish on the doll, fabric-like texture on clothing, glossy printed cardboard on the packaging box, and realistic reflections on the car windshield.
Shot as if captured with a professional full-frame DSLR camera, using a 50mm lens, f/1.8 for shallow depth of field, 8K resolution, ultra-photorealistic rendering.
Studio-quality clarity, extremely sharp details, perfect color grading.`;
const selfiePrompt = `สร้างภาพเซลฟี่กลุ่มแบบไฮเปอร์เรียลลิสติก โดยใช้ภาพที่อัปโหลด (คงใบหน้า เสื้อผ้า และลุคธรรมชาติจากภาพต้นฉบับไว้) เขากำลังถือสมาร์ทโฟนเพื่อถ่ายเซลฟี่ รอบตัวเขามีสมาชิก Marvel ได้แก่ Iron Man, Captain America, Thor, Hulk, Black Widow และ Spider-Man — ทุกคนยิ้มและโพสต์ท่าอย่างเป็นกันเองเหมือนเพื่อนสนิท บางตัวละครเอนตัวเข้ามาใกล้กล้องอย่างขี้เล่น เห็นเต็มตัวทุกคน องค์ประกอบทั้งหมดควรดูเหมือนเป็นเซลฟี่จริง ๆ ที่ทุกคนพยายามเบียดให้พอดีในเฟรม พร้อมฉากในเมือง แสงเป็นแสงธรรมชาติกลางวันคุณภาพแบบภาพยนตร์ โทนสีผิวเป็นธรรมชาติ สีสดใสสมจริง รายละเอียดคมชัดสูงสุด สไตล์โฟโตเรียลลิสติก`;


const PromptControls: React.FC<PromptControlsProps> = ({ 
    prompt, setPrompt, aspectRatio, setAspectRatio, style, setStyle, onSubmit, onRandomPrompt, isLoading, isApiConfigured 
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
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
  };

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
    { label: 'อิมเพรสชันนิสม์', value: 'Impressionist' },
    { label: 'การ์ตูน', value: 'Cartoon' },
    { label: 'เหนือจริง', value: 'Surreal' },
    { label: 'ไซเบอร์พังก์', value: 'Cyberpunk' },
    { label: 'วินเทจ', value: 'Vintage' },
  ];

  const commonButtonDisabled = isLoading || !isApiConfigured;

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
          <button onClick={() => setPrompt(balloonPrompt)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
            ตัวช่วย Prompt: รูปบอลลูน
          </button>
          <button onClick={() => setPrompt(figure3dPrompt)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
            ตัวช่วย Prompt: รูป figure 3d
          </button>
          <button onClick={() => setPrompt(selfiePrompt)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
            ตัวช่วย Prompt: กลุ่มเซลฟี่
          </button>
          <button 
            onClick={onRandomPrompt} 
            disabled={commonButtonDisabled}
            className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors flex items-center gap-1.5 disabled:bg-base-200 disabled:text-gray-500 disabled:cursor-not-allowed"
            title={!isApiConfigured ? 'กรุณาใส่ API Key' : 'สุ่มคำสั่งสำหรับแก้ไขรูปภาพ'}
          >
            <MagicWandIcon className="w-4 h-4" />
            สุ่มคำสั่ง
          </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex flex-col gap-3 items-center">
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

        <div className="flex flex-col gap-3 items-center">
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
      </div>
      
      {style !== 'Default' && (
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
          placeholder="เพิ่มคำอธิบาย เช่น 'เพิ่มหมวกวันเกิดให้แมว' หรือปล่อยว่างไว้เพื่อให้ AI สร้างสรรค์..."
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
            <SparklesIcon className="w-6 h-6" />
            <span>{isLoading ? 'กำลังประมวลผล...' : 'สร้างรูปภาพ'}</span>
        </button>
      </div>
    </div>
  );
};

export default PromptControls;