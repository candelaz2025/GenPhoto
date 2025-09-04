// Fix: Provide the implementation for the ResultDisplay component.
import React from 'react';
import { Result } from '../types';
import { ReuseIcon, DownloadIcon, ShareIcon } from './IconComponents';

interface ResultDisplayProps {
  result: Result | null;
  onAddToHistory: (result: Result) => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onAddToHistory }) => {
  if (!result) {
    return null;
  }

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
            title: 'สร้างโดยโปรมแกรมสร้างรูปภาพและ วิดีโอฟรี',
            text: 'ดูรูปภาพที่ฉันสร้างด้วย AI!',
            files: [file],
        });
    } catch (error) {
        console.error('Error sharing:', error);
        // User might have cancelled the share, so we don't show an error.
    }
  };

  return (
    <div className="w-full space-y-4 p-4 bg-base-200/50 rounded-lg animate-fade-in">
      <h2 className="text-xl font-semibold text-center">ผลลัพธ์ที่ได้</h2>
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {result.image && (
          <div className="w-full md:w-1/2 relative group">
            <img src={result.image} alt="Generated result" className="w-full h-auto object-contain rounded-lg shadow-lg" />
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button
                    onClick={handleAdd}
                    className="bg-brand-primary/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-secondary transform hover:scale-110"
                    aria-label="บันทึกผลลัพธ์นี้"
                    title="บันทึกผลลัพธ์นี้"
                >
                    <ReuseIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={handleDownload}
                    className="bg-green-600/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-green-500 transform hover:scale-110"
                    aria-label="ดาวน์โหลดรูปภาพ"
                    title="ดาวน์โหลดรูปภาพ"
                >
                    <DownloadIcon className="w-5 h-5" />
                </button>
                {navigator.share && (
                    <button
                        onClick={handleShare}
                        className="bg-blue-500/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-400 transform hover:scale-110"
                        aria-label="แชร์รูปภาพ"
                        title="แชร์รูปภาพ"
                    >
                        <ShareIcon className="w-5 h-5" />
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