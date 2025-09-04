// Fix: Provide the implementation for the PromptControls component.
import React from 'react';
import { SparklesIcon, VideoIcon } from './IconComponents';
import { AspectRatio } from '../types';

interface PromptControlsProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  aspectRatio: AspectRatio;
  setAspectRatio: (ratio: AspectRatio) => void;
  onSubmit: () => void;
  onVideoSubmit: () => void;
  isLoading: boolean;
  isVideoButtonDisabled: boolean;
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


const PromptControls: React.FC<PromptControlsProps> = ({ prompt, setPrompt, aspectRatio, setAspectRatio, onSubmit, onVideoSubmit, isLoading, isVideoButtonDisabled }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading) {
        onSubmit();
      }
    }
  };

  const aspectRatios: { label: string, value: AspectRatio }[] = [
    { label: 'สี่เหลี่ยม', value: '1:1' },
    { label: 'แนวนอน', value: '16:9' },
    { label: 'แนวตั้ง', value: '9:16' },
  ];

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
          <button onClick={() => setPrompt(balloonPrompt)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
            ตัวช่วย Prompt: รูปบอลลูน
          </button>
          <button onClick={() => setPrompt(figure3dPrompt)} className="px-3 py-1 text-sm bg-base-300 rounded-full hover:bg-brand-primary/50 transition-colors">
            ตัวช่วย Prompt: รูป figure 3d
          </button>
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

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="เพิ่มคำอธิบาย เช่น 'เพิ่มหมวกวันเกิดให้แมว' หรือปล่อยว่างไว้เพื่อให้ AI สร้างสรรค์..."
        className="w-full p-4 bg-base-200/50 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow resize-none"
        rows={3}
        disabled={isLoading}
      />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
            onClick={onSubmit}
            disabled={isLoading}
            className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-colors disabled:bg-base-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-brand-secondary/50"
        >
            <SparklesIcon className="w-6 h-6" />
            <span>{isLoading ? 'กำลังประมวลผล...' : 'สร้างรูปภาพ'}</span>
        </button>
        <button
            onClick={onVideoSubmit}
            disabled={isLoading || isVideoButtonDisabled}
            className="w-full sm:w-auto px-8 py-3 bg-brand-secondary text-white font-bold rounded-lg hover:bg-brand-light transition-colors disabled:bg-base-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-brand-light/50"
            title={isVideoButtonDisabled ? 'ต้องมีรูปภาพอ้างอิงอย่างน้อย 1 ภาพ' : ''}
        >
            <VideoIcon className="w-6 h-6" />
            <span>{isLoading ? 'กำลังประมวลผล...' : 'สร้างวิดีโอ'}</span>
        </button>
      </div>
    </div>
  );
};

export default PromptControls;