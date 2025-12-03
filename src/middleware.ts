import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
	const { url } = context;
	console.log(`[Middleware] Request: ${url.pathname}`);
	if (url.pathname === '/debug') {
		console.log('[Middleware] Debug page requested. Env check:', {
			CMS_KEY: !!process.env.CMS_ENCRYPTION_KEY,
			DB_TOKEN: !!process.env.ASTRO_DB_APP_TOKEN,
			DB_URL: !!process.env.ASTRO_DB_REMOTE_URL
		});
	}

	// Skip middleware for StudioCMS routes
	if (
		url.pathname.startsWith('/admin') ||
		url.pathname.startsWith('/dashboard') ||
		url.pathname.startsWith('/studio-admin') ||
		url.pathname.startsWith('/cms') ||
		url.pathname.startsWith('/start') ||
		url.pathname.startsWith('/studiocms') ||
		url.pathname.startsWith('/studiocms_api')
	) {
		return next();
	}

	// Let all other routes pass through normally
	// The index.astro page will handle the root redirect
	return next();
});
