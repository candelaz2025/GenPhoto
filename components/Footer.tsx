import React from 'react';
import { UserGroupIcon } from './IconComponents';
import { Translation } from '../locales/translations';

interface FooterProps {
  visitorCount: number | null;
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ visitorCount, t }) => {
  return (
    <footer className="w-full mt-12 py-4 text-center text-gray-500 text-sm">
      {visitorCount !== null && (
        <div className="flex items-center justify-center gap-2 mb-2 text-gray-400">
          <UserGroupIcon className="w-5 h-5" />
          <span>{t.visitorCount(visitorCount.toLocaleString())}</span>
        </div>
      )}
      <p>{t.createdBy}</p>
    </footer>
  );
};

export default Footer;
