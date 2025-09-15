import React from 'react';
import { Translation } from '../locales/translations';
import * as Icons from './IconComponents';

interface HowToUseModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
}

const HowToUseModal: React.FC<HowToUseModalProps> = ({ isOpen, onClose, t }) => {
  if (!isOpen) {
    return null;
  }

  const { title, sections, closeButton } = t.howToUseModal;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="howToUseModalTitle"
    >
      <div 
        className="bg-base-200 rounded-lg shadow-2xl p-6 m-4 max-w-2xl w-full transform transition-all flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 id="howToUseModalTitle" className="text-2xl font-bold text-content">
            {title}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto pr-2 -mr-4 flex-grow space-y-4 text-gray-300">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg text-brand-light mb-1">{section.title}</h3>
              <p className="text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex-shrink-0">
          <button 
            onClick={onClose}
            className="w-full px-4 py-2 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-secondary transition-colors"
          >
            {closeButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToUseModal;