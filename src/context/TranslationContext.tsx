'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations.json';
import CircularProgress from '@mui/material/CircularProgress';

type TranslationKeys = keyof typeof translations['en'];

interface TranslationContextType {
  language: 'en' | 'es' | undefined;
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
  const [language, setLanguage] = useState<'en' | 'es'>();
  const [loadingTranslation, setLoadingTranslation] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'es')) {
      setLanguage(storedLanguage as 'en' | 'es');
    }
  }, []);

  useEffect(() => {
    if (language) {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (key: TranslationKeys) => {
    if (language) {
      return translations[language][key] || key;
    }
    // Handle the case where language is undefined
    return "Loading...";
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