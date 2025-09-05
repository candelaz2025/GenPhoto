import React from 'react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="apiKeyModalTitle"
    >
      <div 
        className="bg-base-200 rounded-lg shadow-2xl p-6 m-4 max-w-lg w-full transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="apiKeyModalTitle" className="text-xl font-bold text-content">
            วิธีรับ Gemini API Key
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-3 text-sm text-gray-300">
          <p>ทำตามขั้นตอนง่ายๆ ดังนี้เพื่อรับ API Key ของคุณ:</p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>
              ไปที่{' '}
              <a 
                href="https://aistudio.google.com/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-light underline hover:text-brand-secondary"
              >
                Google AI Studio
              </a>.
            </li>
            <li>
              คลิกที่ปุ่ม <strong>"Create API key"</strong>.
            </li>
            <li>
              เลือกโปรเจกต์ Google Cloud ของคุณ หรือสร้างโปรเจกต์ใหม่.
            </li>
            <li>
              คัดลอก API key ที่ปรากฏขึ้นมา.
            </li>
            <li>
              นำคีย์มาวางในช่องใส่ API Key ในแอปพลิเคชันนี้ แล้วกด "บันทึก".
            </li>
          </ol>
          <p className="mt-4 pt-3 border-t border-base-300 text-xs text-gray-400">
            <strong>หมายเหตุ:</strong> API key ของคุณจะถูกบันทึกไว้ในเบราว์เซอร์ของคุณเท่านั้นและจะไม่ถูกส่งไปที่อื่น.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;
