import en from './locales/en.json';
import es from './locales/es.json';

export const languages = {
	en: 'English',
	es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
	en,
	es,
} as const;

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: string): string {
		const keys = key.split('.');
		let value: unknown = ui[lang];

		for (const k of keys) {
			if (typeof value === 'object' && value !== null && k in value) {
				value = (value as Record<string, unknown>)[k];
			} else {
				return key;
			}
		}

		return typeof value === 'string' ? value : key;
	};
}
