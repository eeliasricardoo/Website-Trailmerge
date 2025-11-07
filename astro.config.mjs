// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://trailmerge.com',
	output: 'static',
	compressHTML: true,
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: false
		}
	},
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			// Custom priority per route
			serialize(item) {
				// Homepage - highest priority
				if (item.url === 'https://trailmerge.com/') {
					item.changefreq = 'daily';
					item.priority = 1.0;
				}
				// About page
				else if (item.url.includes('/about')) {
					item.changefreq = 'monthly';
					item.priority = 0.9;
				}
				// Blog listing
				else if (item.url === 'https://trailmerge.com/blog/') {
					item.changefreq = 'weekly';
					item.priority = 0.9;
				}
				// Blog posts
				else if (item.url.includes('/blog/')) {
					item.changefreq = 'monthly';
					item.priority = 0.8;
				}
				return item;
			}
		})
	],
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		build: {
			cssMinify: true,
			minify: 'terser',
			terserOptions: {
				compress: {
					drop_console: true,
					drop_debugger: true,
				},
			},
			rollupOptions: {
				output: {
					manualChunks: {
						'vendor': ['astro/assets'],
					},
				},
			},
		},
		ssr: {
			noExternal: ['astro'],
		},
	},
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'uploads-ssl.webflow.com',
			},
		],
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
});
