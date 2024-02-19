'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations.json';


type TranslationKeys = keyof typeof translations['en'];

interface TranslationContextType {
  language: 'en' | 'es';
  setLanguage: (language: 'en' | 'es') => void;
  t: (key: TranslationKeys) => string;
  loadingTranslation: boolean;
  setLoadingTranslation: (loading: boolean) => void;
}

interface Props {
    children: React.ReactNode;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [loadingTranslation, setLoadingTranslation] = useState(false);
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState(false);

  const loadTranslationsFromLocalStorage = () => {
    const storedTranslations = localStorage.getItem('translations');
    if (storedTranslations) {
      const parsedTranslations = JSON.parse(storedTranslations);
      translations['en'] = parsedTranslations['en'];
      translations['es'] = parsedTranslations['es'];
      setLoadedFromLocalStorage(true);
    }
  };

  useEffect(() => {
    loadTranslationsFromLocalStorage();
  }, []);

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
  };

  const saveTranslationsToLocalStorage = () => {
    localStorage.setItem('translations', JSON.stringify(translations));
  };


  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, loadingTranslation, setLoadingTranslation }}>
      {loadingTranslation && (
        <div className="loading-overlay">
          <div className="spinner"></div>
            <p>{t("Loading")}</p>
        </div>
      )}
      {children}
    </TranslationContext.Provider>
  );
};