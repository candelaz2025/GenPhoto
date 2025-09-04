import React from 'react';
import { type UploadedImage } from '../types';
import { TrashIcon } from './IconComponents';

interface ImageGalleryProps {
  images: UploadedImage[];
  onRemove: (id: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onRemove }) => {
  return (
    <div className="space-y-4 p-4 bg-base-200/50 rounded-lg">
        <h2 className="text-xl font-semibold text-center">รูปภาพอ้างอิงของคุณ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((image) => (
            <div key={image.id} className="relative group aspect-square">
                <img src={image.previewUrl} alt="upload preview" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove(image.id);
                    }}
                    className="absolute top-2 right-2 bg-red-600/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                    aria-label="Remove image"
                >
                    <TrashIcon className="w-4 h-4" />
                </button>
            </div>
        ))}
        </div>
    </div>
  );
};

export default ImageGallery;