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
  const [translationsLoaded, setTranslationsLoaded] = useState(false);
  const [translatedTexts, setTranslatedTexts] = useState<{ [key in TranslationKeys]: string }>({});

  useEffect(() => {
    // Load translations only once
    setLoadingTranslation(true);
    // Simulate loading translations
    setTimeout(() => {
      setTranslatedTexts({
        ...translations[language],
      });
      setTranslationsLoaded(true);
      setLoadingTranslation(false);
    }, 2500);
  }, [language]);

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
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