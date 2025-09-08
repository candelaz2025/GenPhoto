import React from 'react';
import { ZenitsuSeventhFormIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="bg-base-200/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <ZenitsuSeventhFormIcon className="w-10 h-10" aria-label="Zenitsu pixel art icon" />
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-secondary">
            Image Gen Nano Banana
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;