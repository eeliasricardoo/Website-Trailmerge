import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	const { request, url } = context;
	
	// Only handle root path
	if (url.pathname === '/') {
		// Get Accept-Language header
		const acceptLanguage = request.headers.get('accept-language') || '';
		
		// Parse languages and find preferred language
		const languages = acceptLanguage
			.split(',')
			.map(lang => {
				const [locale, q = '1'] = lang.trim().split(';q=');
				return { locale: locale.toLowerCase(), quality: parseFloat(q) };
			})
			.sort((a, b) => b.quality - a.quality);
		
		// Check if Spanish is preferred
		const prefersSpanish = languages.some(lang => 
			lang.locale.startsWith('es') || 
			lang.locale.includes('es')
		);
		
		// Redirect based on language preference
		if (prefersSpanish) {
			return context.redirect('/es/', 302);
		}
		
		// Default to English
		return context.redirect('/en/', 302);
	}
	
	// Continue with normal request handling
	return next();
};

