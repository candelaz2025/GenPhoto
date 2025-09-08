import React, { useState, useRef, useEffect } from 'react';
import { ZenitsuSeventhFormIcon } from './IconComponents';
import { Language } from '../types';
import { Translation } from '../locales/translations';

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: { code: Language, name: string, flag: string }[] = [
        { code: 'th', name: 'ไทย', flag: '🇹🇭' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'cn', name: '中文', flag: '🇨🇳' },
    ];

    const selectedLanguage = languages.find(l => l.code === language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-base-300 rounded-md hover:bg-base-100 transition-colors"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span>{selectedLanguage.flag}</span>
                <span className="text-sm font-medium">{selectedLanguage.name}</span>
                 <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-base-200 rounded-lg shadow-xl z-20 animate-fade-in">
                    <ul className="py-1">
                        {languages.map(lang => (
                            <li key={lang.code}>
                                <button
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-content hover:bg-brand-primary/30"
                                >
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


interface HeaderProps {
    t: Translation;
    language: Language;
    setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ t, language, setLanguage }) => {
  return (
    <header className="bg-base-200/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1 flex justify-start"></div> {/* Spacer */}
        <div className="flex items-center space-x-3">
          <ZenitsuSeventhFormIcon className="w-10 h-10" aria-label="Zenitsu pixel art icon" />
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-secondary text-center">
            {t.appName}
          </h1>
        </div>
        <div className="flex-1 flex justify-end">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
