/**
 * Generate SEO keywords for blog posts
 */
export function getBlogKeywords(lang: string, category: string, title: string): string {
	const base = category + ', ' + title;
	if (lang === 'en') {
		return base + ', UX design, B2B SaaS, product design, Trailmerge';
	}
	return base + ', diseño UX, B2B SaaS, diseño de producto, Trailmerge';
}

