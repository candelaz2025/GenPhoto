
import React from 'react';
import { UserGroupIcon } from './IconComponents';

interface FooterProps {
  visitorCount: number | null;
}

const Footer: React.FC<FooterProps> = ({ visitorCount }) => {
  return (
    <footer className="w-full mt-12 py-4 text-center text-gray-500 text-sm">
      {visitorCount !== null && (
        <div className="flex items-center justify-center gap-2 mb-2 text-gray-400">
          <UserGroupIcon className="w-5 h-5" />
          <span>ผู้เข้าชม: {visitorCount.toLocaleString('th-TH')}</span>
        </div>
      )}
      <p>สร้างโดย Candelaz Kengza</p>
    </footer>
  );
};

export default Footer;
