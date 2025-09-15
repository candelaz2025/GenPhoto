import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../locales/translations';
import { QuestionMarkIcon, BookOpenIcon, FacebookIcon, XIcon } from './IconComponents';

interface FloatingMenuProps {
  onHowToUseClick: () => void;
  t: Translation;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ onHowToUseClick, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-40">
      <div className="relative flex flex-col items-center gap-3">
        {/* Menu Items */}
        <div 
          className={`transition-all duration-300 ease-in-out flex flex-col items-center gap-3 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* How to Use Button */}
          <div className="relative group flex flex-col items-center">
            <span className="absolute bottom-full mb-2 w-max bg-base-300 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {t.floatingMenu.howToUse}
            </span>
            <button
              onClick={() => {
                onHowToUseClick();
                setIsOpen(false);
              }}
              className="w-12 h-12 bg-base-200 rounded-full flex items-center justify-center shadow-lg hover:bg-base-300 transition-colors"
              aria-label={t.floatingMenu.howToUse}
            >
              <BookOpenIcon className="w-6 h-6 text-content" />
            </button>
          </div>

          {/* Facebook Link */}
          <div className="relative group flex flex-col items-center">
            <span className="absolute bottom-full mb-2 w-max bg-base-300 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {t.floatingMenu.facebookPage}
            </span>
            <a
              href="https://www.facebook.com/KENGZza/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-base-200 rounded-full flex items-center justify-center shadow-lg hover:bg-base-300 transition-colors"
              aria-label={t.floatingMenu.facebookPage}
            >
              <FacebookIcon className="w-6 h-6 text-content" />
            </a>
          </div>
        </div>

        {/* Main FAB */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all text-white"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label="Open help menu"
        >
          <div className="transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            {isOpen ? <XIcon className="w-7 h-7" /> : <QuestionMarkIcon className="w-7 h-7" />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatingMenu;