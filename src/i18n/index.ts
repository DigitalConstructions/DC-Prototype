import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { es } from './locales/es';

const SUPPORTED_LANGUAGES = ['en', 'es'];
const LANGUAGE_STORAGE_KEY = 'preferred-language';

function normalizeLanguage(language: string): string {
  return language.toLowerCase().split('-')[0];
}

function isSupportedLanguage(language: string): boolean {
  return SUPPORTED_LANGUAGES.includes(language);
}

function detectInitialLanguage(): string {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage && isSupportedLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const language of browserLanguages) {
    const normalizedLanguage = normalizeLanguage(language);
    if (isSupportedLanguage(normalizedLanguage)) {
      return normalizedLanguage;
    }
  }

  return 'en';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es
    },
    lng: detectInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

i18n.on('languageChanged', (language) => {
  if (typeof window === 'undefined') {
    return;
  }

  const normalizedLanguage = normalizeLanguage(language);
  if (isSupportedLanguage(normalizedLanguage)) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
  }
});

export default i18n;
