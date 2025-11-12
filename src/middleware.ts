import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	const { url, request } = context;
	
	// Only handle root path redirects
	if (url.pathname === '/' || url.pathname === '') {
		// Get Accept-Language header
		const acceptLanguage = request.headers.get('accept-language') || '';
		
		// Check if Spanish is preferred
		const prefersSpanish = acceptLanguage.toLowerCase().includes('es');
		
		// Redirect to appropriate locale
		const redirectUrl = prefersSpanish ? '/es/' : '/en/';
		
		return new Response(null, {
			status: 302,
			headers: {
				'Location': redirectUrl,
			},
		});
	}
	
	// Continue with normal request handling
	return next();
};

