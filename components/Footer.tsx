import React from 'react';
import { Translation } from '../locales/translations';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="w-full mt-12 py-4 text-center text-gray-500 text-sm">
      <p>{t.createdBy}</p>
    </footer>
  );
};

export default Footer;