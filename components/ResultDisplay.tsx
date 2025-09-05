// Fix: Provide the implementation for the ResultDisplay component.
import React, { useState, useRef, MouseEvent, WheelEvent } from 'react';
import { Result } from '../types';
import { ReuseIcon, DownloadIcon, ShareIcon, ZoomInIcon, ZoomOutIcon, ResetZoomIcon } from './IconComponents';

interface ResultDisplayProps {
  result: Result | null;
  onAddToHistory: (result: Result) => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onAddToHistory }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleAdd = () => {
    if (result && result.image) {
      onAddToHistory(result);
    }
  };

  const handleDownload = () => {
    if (!result?.image) return;
    const link = document.createElement('a');
    link.href = result.image;
    link.download = `gemini-art-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleVideoDownload = () => {
    if (!result?.videoUrl) return;
    const link = document.createElement('a');
    link.href = result.videoUrl;
    link.download = `gemini-video-${Date.now()}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (!result?.image || !navigator.share) {
        alert('เบราว์เซอร์ของคุณไม่รองรับการแชร์ หรือไม่มีรูปภาพให้แชร์');
        return;
    }

    try {
        const response = await fetch(result.image);
        const blob = await response.blob();
        const file = new File([blob], `gemini-art-${Date.now()}.png`, { type: blob.type });

        await navigator.share({
            title: 'สร้างโดยโปรแกรมแก้ไขรูปภาพ Gemini',
            text: 'ดูรูปภาพที่ฉันสร้างด้วย AI!',
            files: [file],
        });
    } catch (error) {
        console.error('Error sharing:', error);
        // User might have cancelled the share, so we don't show an error.
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (scale > 1) {
      setIsPanning(true);
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isPanning) {
      setPosition(pos => ({
        x: pos.x + e.movementX,
        y: pos.y + e.movementY,
      }));
    }
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const scaleAmount = e.deltaY > 0 ? -0.2 : 0.2;
    setScale(prev => Math.min(Math.max(prev + scaleAmount, 1), 5));
    if (scale <= 1 && scaleAmount < 0) {
      handleResetZoom();
    }
  };
  
  const handleZoomIn = () => setScale(s => Math.min(s + 0.5, 5));
  const handleZoomOut = () => {
      const newScale = Math.max(scale - 0.5, 1);
      setScale(newScale);
      if (newScale <= 1) handleResetZoom();
  };
  const handleResetZoom = () => {
      setScale(1);
      setPosition({ x: 0, y: 0 });
  };


  if (!result) {
    return null;
  }

  return (
    <div className="w-full space-y-4 p-4 bg-base-200/50 rounded-lg animate-fade-in">
      <h2 className="text-xl font-semibold text-center">ผลลัพธ์ที่ได้</h2>
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {result.image && (
          <div className="w-full md:w-1/2 relative group">
            <div
                ref={imageContainerRef}
                className={`w-full h-auto rounded-lg shadow-lg overflow-hidden ${scale > 1 ? 'cursor-grabbing' : 'cursor-zoom-in'}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onWheel={handleWheel}
            >
                <img 
                    src={result.image} 
                    alt="Generated result" 
                    className="w-full h-full object-contain transition-transform duration-100 ease-out"
                    style={{ 
                        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                        willChange: 'transform',
                    }}
                />
            </div>
            {/* Action buttons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={handleAdd}
                    className="bg-brand-primary/80 text-white p-2 rounded-full transition-all hover:bg-brand-secondary transform hover:scale-110"
                    aria-label="บันทึกผลลัพธ์นี้"
                    title="บันทึกผลลัพธ์นี้"
                >
                    <ReuseIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={handleDownload}
                    className="bg-green-600/80 text-white p-2 rounded-full transition-all hover:bg-green-500 transform hover:scale-110"
                    aria-label="ดาวน์โหลดรูปภาพ"
                    title="ดาวน์โหลดรูปภาพ"
                >
                    <DownloadIcon className="w-5 h-5" />
                </button>
                {navigator.share && (
                    <button
                        onClick={handleShare}
                        className="bg-blue-500/80 text-white p-2 rounded-full transition-all hover:bg-blue-400 transform hover:scale-110"
                        aria-label="แชร์รูปภาพ"
                        title="แชร์รูปภาพ"
                    >
                        <ShareIcon className="w-5 h-5" />
                    </button>
                )}
            </div>
            {/* Zoom controls */}
             <div className="absolute top-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={handleZoomIn} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110" title="ซูมเข้า">
                     <ZoomInIcon className="w-5 h-5" />
                 </button>
                 <button onClick={handleZoomOut} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110" title="ซูมออก">
                     <ZoomOutIcon className="w-5 h-5" />
                 </button>
                 {scale > 1 && (
                     <button onClick={handleResetZoom} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110" title="รีเซ็ต">
                         <ResetZoomIcon className="w-5 h-5" />
                     </button>
                 )}
             </div>
          </div>
        )}
         {result.videoUrl && (
          <div className="w-full md:w-1/2 relative group">
            <video 
              src={result.videoUrl} 
              controls 
              autoPlay 
              loop 
              muted
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            >
              เบราว์เซอร์ของคุณไม่รองรับวิดีโอแท็ก
            </video>
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button
                    onClick={handleVideoDownload}
                    className="bg-green-600/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-green-500 transform hover:scale-110"
                    aria-label="ดาวน์โหลดวิดีโอ"
                    title="ดาวน์โหลดวิดีโอ"
                >
                    <DownloadIcon className="w-5 h-5" />
                </button>
            </div>
          </div>
        )}
        {result.text && (
          <div className={`w-full ${result.image || result.videoUrl ? 'md:w-1/2' : ''}`}>
            <div className="p-4 bg-base-100 rounded-lg h-full">
              <p className="text-content whitespace-pre-wrap">{result.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;