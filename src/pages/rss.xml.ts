import rss from '@astrojs/rss';
import { getAllPosts } from '../data/blogPosts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = getAllPosts();

	return rss({
		title: 'Trailmerge Blog – Design Insights for B2B SaaS',
		description: 'Helpful articles for B2B SaaS founders and product leaders on the topics of UX design best practices and product strategy.',
		site: context.site || 'https://trailmerge.com',
		items: posts.map((post) => ({
			title: post.title,
			pubDate: new Date(post.date),
			description: post.excerpt,
			link: `/en/blog/${post.slug}/`,
			categories: [post.category],
			author: post.author.name,
		})),
		customData: `<language>en-us</language>`,
		stylesheet: false,
	});
}
