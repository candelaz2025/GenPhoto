import React from 'react';
import { HistoryItem } from '../types';
import { TrashIcon, ReuseIcon } from './IconComponents';
import { Translation } from '../locales/translations';

interface HistoryGalleryProps {
  history: HistoryItem[];
  onClear: () => void;
  onReuse: (imageUrl: string) => void;
  t: Translation;
}

const HistoryGallery: React.FC<HistoryGalleryProps> = ({ history, onClear, onReuse, t }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 p-4 bg-base-200/50 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{t.historyTitle}</h2>
        <button 
            onClick={onClear}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
            aria-label={t.clearHistoryButton}
        >
            <TrashIcon className="w-4 h-4" />
            <span>{t.clearHistoryButton}</span>
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {history.map((item) => (
          <div key={item.id} className="relative group aspect-square">
            <img src={item.imageUrl} alt="Generated history item" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center p-2">
                {item.text && <p className="text-white text-xs text-center line-clamp-4">{item.text}</p>}
            </div>
            <button
                onClick={() => onReuse(item.imageUrl)}
                className="absolute top-2 right-2 bg-brand-primary/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-secondary transform hover:scale-110"
                aria-label={t.reuseImageTooltip}
                title={t.reuseImageTooltip}
            >
                <ReuseIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryGallery;
