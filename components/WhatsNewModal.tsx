import React from 'react';
import { Translation } from '../locales/translations';
import * as Icons from './IconComponents';

interface WhatsNewModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    EditIcon: Icons.EditIcon,
    PaintBrushIcon: Icons.PaintBrushIcon,
    SparklesIcon: Icons.SparklesIcon,
    VideoIcon: Icons.VideoIcon,
    CheckBadgeIcon: Icons.CheckBadgeIcon,
};

const WhatsNewModal: React.FC<WhatsNewModalProps> = ({ isOpen, onClose, t }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsNewModalTitle"
    >
      <div 
        className="bg-base-200 rounded-lg shadow-2xl p-6 m-4 max-w-lg w-full transform transition-all flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex justify-between items-center mb-2 flex-shrink-0">
          <h2 id="whatsNewModalTitle" className="text-2xl font-bold text-content">
            {t.whatsNewTitle}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-400 mb-4 flex-shrink-0">{t.whatsNewDate}</p>

        <div className="overflow-y-auto pr-2 -mr-4 flex-grow space-y-4">
          {t.whatsNewFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Icons.CheckBadgeIcon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-brand-primary/20 text-brand-light p-2 rounded-full">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-content">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex-shrink-0">
          <button 
            onClick={onClose}
            className="w-full px-4 py-2 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-secondary transition-colors"
          >
            {t.whatsNewCloseButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsNewModal;