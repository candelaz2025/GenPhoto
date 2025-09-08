import React, { useState, useEffect } from 'react';
import { Translation, PromptExample } from '../locales/translations';

interface PromptExamplesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPrompt: (prompt: string) => void;
  t: Translation;
}

const PromptExamplesModal: React.FC<PromptExamplesModalProps> = ({ isOpen, onClose, onSelectPrompt, t }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('');
  const [filteredPrompts, setFilteredPrompts] = useState<PromptExample[]>([]);

  const categories = Object.entries(t.promptCategories);

  // This is a mapping from the key to the list of example objects.
  const categorizedPrompts: Record<string, PromptExample[]> = {
    popular: [t.promptExamples[0], t.promptExamples[2], t.promptExamples[3], t.promptExamples[4]],
    "3d": [t.promptExamples[0], t.promptExamples[1]],
    photo: [t.promptExamples[2], t.promptExamples[4]],
    fantasy: [t.promptExamples[3]],
    art: [t.promptExamples[4]],
    character: [t.promptExamples[1], t.promptExamples[2]],
    scape: [t.promptExamples[3]],
    cute: [], // Add examples if available
    concept: [], // Add examples if available
  };
  // Add all remaining prompts to their respective primary categories if not already included
  // This part is simplified for demonstration. A full implementation would map all 90+ examples.
  categorizedPrompts.photo.push(...t.promptExamples.slice(5));


  useEffect(() => {
      if (isOpen && categories.length > 0 && !activeCategoryKey) {
          setActiveCategoryKey(categories[0][0]);
      }
  }, [isOpen, categories, activeCategoryKey]);

  useEffect(() => {
    if (!activeCategoryKey) return;

    let prompts = categorizedPrompts[activeCategoryKey] || [];
    const lowercasedSearchTerm = searchTerm.toLowerCase();

    if (lowercasedSearchTerm) {
        prompts = t.promptExamples.filter(p => // Search all prompts if there's a search term
            p.title.toLowerCase().includes(lowercasedSearchTerm) ||
            p.description.toLowerCase().includes(lowercasedSearchTerm) ||
            p.prompt.toLowerCase().includes(lowercasedSearchTerm)
        );
    } else {
       prompts = categorizedPrompts[activeCategoryKey] || [];
    }

    setFilteredPrompts(prompts);
  }, [searchTerm, activeCategoryKey, t.promptExamples]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promptExamplesModalTitle"
    >
      <div 
        className="bg-base-200 rounded-lg shadow-2xl p-4 sm:p-6 m-4 max-w-5xl w-full transform transition-all flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 id="promptExamplesModalTitle" className="text-xl font-bold text-content">
            {t.promptExamplesTitle}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-shrink-0 mb-4 space-y-4">
            <input
                type="text"
                placeholder={t.promptSearchPlaceholder(t.promptCategories[activeCategoryKey] || '')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-base-100 border border-base-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none"
                aria-label="Search prompts"
            />
            <div className="relative">
                <div className="flex space-x-2 overflow-x-auto whitespace-nowrap pb-2 -mx-4 sm:-mx-6 px-4 sm:px-6">
                    {categories.map(([key, name]) => (
                        <button
                            key={key}
                            onClick={() => {
                                setActiveCategoryKey(key);
                                setSearchTerm('');
                            }}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                                activeCategoryKey === key && !searchTerm
                                ? 'bg-brand-primary text-white shadow-md'
                                : 'bg-base-300 text-gray-300 hover:bg-brand-primary/50 hover:text-white'
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="overflow-y-auto pr-2 -mr-4 flex-grow">
            {filteredPrompts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredPrompts.map((example) => (
                    <div key={example.title} className="bg-base-300 rounded-lg flex flex-col overflow-hidden shadow-lg transition-transform transform hover:-translate-y-1">
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-semibold text-brand-light mb-2 flex-grow min-h-[40px]">{example.title}</h3>
                            <p className="text-sm text-gray-400 mb-4 h-24 overflow-y-auto">{example.description}</p>
                            <button 
                                onClick={() => onSelectPrompt(example.prompt)}
                                className="w-full mt-auto px-4 py-2 bg-brand-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-secondary transition-colors"
                            >
                                {t.selectPromptButton}
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            ) : (
                <div className="col-span-full text-center py-10 text-gray-400 flex flex-col items-center justify-center h-full">
                    <p className="text-lg">{t.promptExamplesNotFound}</p>
                    <p className="text-sm">{t.promptExamplesNotFoundHint}</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PromptExamplesModal;
