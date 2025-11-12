import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

export const defaultLang = 'en';

export const ui = {
  en,
  es,
  pt,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = ui[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  }
}
