import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	// For static builds, language detection is handled client-side in index.astro
	// Middleware can be used for additional features in the future
	
	// Continue with normal request handling
	return next();
};

