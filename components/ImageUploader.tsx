
import React, { useRef } from 'react';
import { UploadIcon } from './IconComponents';

interface ImageUploaderProps {
  onFileChange: (files: FileList | null) => void;
  imageCount: number;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileChange, imageCount }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFileChange(event.target.files);
    // Reset file input to allow re-uploading the same file
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

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
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
            <span>เพิ่มรูปภาพ ({imageCount}/10)</span>
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

  return (
    <div 
      className="w-full p-8 border-2 border-dashed border-base-300 rounded-xl text-center cursor-pointer hover:border-brand-secondary hover:bg-base-200/50 transition-all duration-300"
      onClick={handleClick}
      onDragOver={handleDragOver}
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
      <div className="flex flex-col items-center justify-center space-y-4 text-gray-400">
        <UploadIcon className="w-12 h-12" />
        <h2 className="text-xl font-semibold text-content">ลากและวางรูปภาพที่นี่</h2>
        <p>หรือคลิกเพื่อเลือกไฟล์</p>
        <p className="text-sm">(สูงสุด 10 ภาพ, PNG, JPG, WEBP)</p>
      </div>
    </div>
  );
};

export default ImageUploader;