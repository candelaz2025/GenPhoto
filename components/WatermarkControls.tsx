
import React, { useRef } from 'react';
import { Translation } from '../locales/translations';
import { UploadIcon, TrashIcon, CheckBadgeIcon } from './IconComponents';

interface WatermarkControlsProps {
  watermark: string | null;
  isWatermarkEnabled: boolean;
  generationMode: 'image' | 'video';
  onWatermarkUpload: (file: File) => void;
  onRemoveWatermark: () => void;
  onToggleWatermark: (enabled: boolean) => void;
  t: Translation;
}

const WatermarkControls: React.FC<WatermarkControlsProps> = ({
  watermark,
  isWatermarkEnabled,
  generationMode,
  onWatermarkUpload,
  onRemoveWatermark,
  onToggleWatermark,
  t
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onWatermarkUpload(event.target.files[0]);
    }
    // Reset file input to allow re-uploading the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const isVideoMode = generationMode === 'video';

  return (
    <div className="max-w-xl mx-auto p-4 bg-base-200/50 rounded-lg space-y-3">
      <h3 className="font-semibold text-center">{t.watermarkSettings}</h3>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {watermark ? (
            <div className="relative group">
              <img src={watermark} alt="Watermark preview" className="w-16 h-16 object-contain rounded-md bg-base-100 p-1" />
              <button
                onClick={onRemoveWatermark}
                className="absolute -top-2 -right-2 bg-red-600/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                title={t.removeWatermark}
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="w-16 h-16 bg-base-100 rounded-md flex items-center justify-center">
              <CheckBadgeIcon className="w-8 h-8 text-base-300" />
            </div>
          )}
          <div className="text-sm">
            <button
              onClick={handleUploadClick}
              className="px-4 py-2 bg-base-300 text-content rounded-lg hover:bg-brand-primary/50 transition-colors flex items-center gap-2"
            >
              <UploadIcon className="w-4 h-4" />
              {t.uploadWatermark}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/png, image/jpeg, image/webp"
              className="hidden"
            />
            <p className="text-xs text-gray-400 mt-1">{t.watermarkDesc}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="watermark-toggle" className={`font-medium ${isVideoMode ? 'text-gray-500' : 'text-content'}`}>
            {t.applyWatermark}
          </label>
          <button
            id="watermark-toggle"
            role="switch"
            aria-checked={isWatermarkEnabled && !isVideoMode}
            disabled={isVideoMode}
            onClick={() => onToggleWatermark(!isWatermarkEnabled)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${isWatermarkEnabled && !isVideoMode ? 'bg-brand-primary' : 'bg-base-300'}`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isWatermarkEnabled && !isVideoMode ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
        </div>
      </div>
      {isVideoMode && (
        <p className="text-xs text-yellow-400 text-center animate-fade-in">{t.watermarkDisclaimer}</p>
      )}
    </div>
  );
};

export default WatermarkControls;
