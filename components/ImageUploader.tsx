
import React, { useRef, useState } from 'react';
import { UploadIcon } from './IconComponents';
import { Translation } from '../locales/translations';

interface ImageUploaderProps {
  onFileChange: (files: FileList | null) => void;
  imageCount: number;
  t: Translation;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileChange, imageCount, t }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const dragCounter = useRef(0);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFileChange(event.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current++;
    if (dragCounter.current === 1) {
      setIsDraggingOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDraggingOver(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDraggingOver(false);
    onFileChange(e.dataTransfer.files);
  };
  
  if (imageCount > 0) {
    return (
       <div className="flex justify-center">
        <button
            onClick={handleClick}
            disabled={imageCount >= 10}
            className="mt-4 px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition-colors disabled:bg-base-300 disabled:cursor-not-allowed flex items-center space-x-2"
        >
            <UploadIcon className="w-5 h-5" />
            <span>{t.addImage(imageCount)}</span>
        </button>
         <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            multiple
            accept="image/png, image/jpeg, image/webp"
            className="hidden"
            disabled={imageCount >= 10}
        />
       </div>
    )
  }

  const uploaderClasses = `w-full p-6 border-2 rounded-xl text-center cursor-pointer transition-all duration-300 transform ${
    isDraggingOver 
      ? 'border-solid border-brand-primary bg-brand-primary/10 scale-105' 
      : 'border-dashed border-base-300 hover:border-brand-secondary hover:bg-base-200/50'
  }`;

  return (
    <div 
      className={uploaderClasses}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        multiple
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
      />
      <div className="flex flex-col items-center justify-center space-y-4 text-gray-400 pointer-events-none">
        <UploadIcon className={`w-12 h-12 transition-transform ${isDraggingOver ? 'scale-110' : ''}`} />
        {isDraggingOver ? (
          <h2 className="text-xl font-semibold text-brand-light">{t.uploaderDropMessage}</h2>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-content">{t.uploaderTitle}</h2>
            <p>{t.uploaderSubtitle}</p>
            <p className="text-sm">{t.uploaderLimit}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
