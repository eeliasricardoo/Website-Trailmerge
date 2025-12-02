import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
	const { url } = context;

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
