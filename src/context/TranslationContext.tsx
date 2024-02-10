'use client'
import React, { createContext, useContext, useState } from 'react';
import translations from './translations.json';
import { Skeleton } from '@mui/material';


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

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, loadingTranslation, setLoadingTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};