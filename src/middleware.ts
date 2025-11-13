import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	const { url } = context;

	// Skip middleware for StudioCMS routes
	if (
		url.pathname.startsWith('/admin') ||
		url.pathname.startsWith('/start') ||
		url.pathname.startsWith('/studiocms') ||
		url.pathname.startsWith('/studiocms_api')
	) {
		return next();
	}

	// Let all other routes pass through normally
	// The index.astro page will handle the root redirect
	return next();
};

