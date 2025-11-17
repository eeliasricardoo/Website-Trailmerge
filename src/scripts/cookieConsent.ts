/**
 * Cookie Consent Configuration
 * Initializes Silktide cookie consent banner with i18n support
 */

export type Language = 'en' | 'es';

interface CookieConsentTranslations {
	message: string;
	dismiss: string;
	link: string;
	href: string;
}

/**
 * Cookie consent translations for supported languages
 */
const translations: Record<Language, CookieConsentTranslations> = {
	en: {
		message: 'We use cookies to ensure you get the best experience on our website.',
		dismiss: 'Accept',
		link: 'Learn more',
		href: '/en/privacy/'
	},
	es: {
		message: 'Utilizamos cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.',
		dismiss: 'Aceptar',
		link: 'Más información',
		href: '/es/privacy/'
	}
};

/**
 * Initialize cookie consent banner
 * Must be called after cookieconsent library is loaded
 *
 * @param lang - The language for the consent banner ('en' or 'es')
 */
export function initCookieConsent(lang: Language = 'en'): void {
	// Ensure cookieconsent library is loaded
	if (typeof window === 'undefined' || !window.cookieconsent) {
		console.error('Cookie consent library not loaded');
		return;
	}

	const t = translations[lang] || translations.en;

	window.cookieconsent.initialise({
		palette: {
			popup: {
				background: '#2e3a33',
				text: '#fcfcfc'
			},
			button: {
				background: '#c1e3cb',
				text: '#2e3a33'
			}
		},
		theme: 'classic',
		position: 'bottom',
		content: {
			message: t.message,
			dismiss: t.dismiss,
			link: t.link,
			href: t.href
		}
	});
}

/**
 * Auto-initialize cookie consent on window load
 * Reads language from data-lang attribute on script tag
 */
if (typeof window !== 'undefined') {
	window.addEventListener('load', () => {
		// Try to get language from document or default to 'en'
		const htmlLang = document.documentElement.lang;
		const lang: Language = (htmlLang === 'es' || htmlLang === 'es-ES') ? 'es' : 'en';
		initCookieConsent(lang);
	});
}
