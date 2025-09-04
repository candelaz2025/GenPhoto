import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-base-200/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <span className="text-3xl" role="img" aria-label="paint palette">🎨</span>
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-secondary">
            โปรมแกรมสร้างรูปภาพและ วิดีโอฟรี
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;