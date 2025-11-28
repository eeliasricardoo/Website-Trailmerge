/**
 * Route Mapping Utility
 * Centralized route mapping between English and Spanish URLs
 */

import { safeCreateURL } from './urlHelpers';

export type Language = 'en' | 'es';

export interface RouteMap {
	en: string;
	es: string;
}

export interface AlternateUrls {
	en: string;
	es: string;
}

/**
 * Route mapping between English and Spanish paths
 */
export const routeMap: Record<string, RouteMap> = {
	'/': { en: '/en/', es: '/es/' },
	'/en': { en: '/en/', es: '/es/' },
	'/en/': { en: '/en/', es: '/es/' },
	'/en/about': { en: '/en/about/', es: '/es/about/' },
	'/en/about/': { en: '/en/about/', es: '/es/about/' },
	'/en/blog': { en: '/en/blog/', es: '/es/blog/' },
	'/en/blog/': { en: '/en/blog/', es: '/es/blog/' },
	'/en/privacy': { en: '/en/privacy/', es: '/es/privacy/' },
	'/en/privacy/': { en: '/en/privacy/', es: '/es/privacy/' },
	'/es': { en: '/en/', es: '/es/' },
	'/es/': { en: '/en/', es: '/es/' },
	'/es/about': { en: '/en/about/', es: '/es/about/' },
	'/es/about/': { en: '/en/about/', es: '/es/about/' },
	'/es/sobre-nosotros': { en: '/en/about/', es: '/es/about/' },
	'/es/sobre-nosotros/': { en: '/en/about/', es: '/es/about/' },
	'/es/blog': { en: '/en/blog/', es: '/es/blog/' },
	'/es/blog/': { en: '/en/blog/', es: '/es/blog/' },
	'/es/privacy': { en: '/en/privacy/', es: '/es/privacy/' },
	'/es/privacy/': { en: '/en/privacy/', es: '/es/privacy/' },
	'/es/privacidad': { en: '/en/privacy/', es: '/es/privacy/' },
	'/es/privacidad/': { en: '/en/privacy/', es: '/es/privacy/' },
};

/**
 * Get language-specific URLs for the current path
 * Handles blog posts, known routes, and fallback logic
 *
 * @param currentPath - The current URL pathname
 * @returns Object with en and es URLs
 */
export function getLanguageUrls(currentPath: string): RouteMap {
	// Handle blog post slugs
	const isBlogPost = currentPath.match(/^\/en\/blog\//) || currentPath.match(/^\/es\/blog\//);

	if (isBlogPost) {
		// For blog posts, keep the same slug but change the language prefix
		const slug = currentPath.replace(/^\/(en\/|es\/)?blog\//, '').replace(/\/$/, '');
		return {
			en: `/en/blog/${slug}/`,
			es: `/es/blog/${slug}/`,
		};
	}

	// Use route mapping for known routes
	if (routeMap[currentPath]) {
		return routeMap[currentPath];
	}

	// Fallback: remove language prefix and add appropriate one
	const pathWithoutLang = currentPath.replace(/^\/(en|es)/, '').replace(/\/$/, '') || '/';
	return {
		en: pathWithoutLang === '/' ? '/en/' : `/en${pathWithoutLang}/`,
		es: pathWithoutLang === '/' ? '/es/' : `/es${pathWithoutLang}/`,
	};
}

/**
 * Generate alternate language URLs with full site URL for hreflang tags
 *
 * @param currentPath - The current URL pathname
 * @param siteUrl - The base site URL (e.g., 'https://trailmerge.com')
 * @returns Object with full en and es URLs
 */
export function getAlternateUrls(currentPath: string, siteUrl: string): AlternateUrls {
	const languageUrls = getLanguageUrls(currentPath);

	// Use safe URL creation for cross-platform compatibility
	return {
		en: safeCreateURL(languageUrls.en, siteUrl),
		es: safeCreateURL(languageUrls.es, siteUrl),
	};
}
