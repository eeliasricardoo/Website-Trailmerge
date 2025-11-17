export interface Testimonial {
	quote: string;
	author: string;
	position: string;
	company: string;
	image?: string;
}

// English testimonials
export const testimonialsEn: Testimonial[] = [
	{
		quote:
			'Trailmerge has been the difference between success and failure for our early-stage startup.',
		author: 'Sean Grapevine',
		position: 'Founder',
		company: 'LoanShout',
	},
	{
		quote:
			'Trailmerge is able to interpret a lot of scattered information around our design and UX goals and piece it together in a way that makes sense.',
		author: 'Andy Binkley',
		position: 'Co-founder & CEO',
		company: 'Tourial',
	},
];

// Spanish testimonials
export const testimonialsEs: Testimonial[] = [
	{
		quote:
			'Trailmerge marcó la diferencia entre el éxito y el fracaso de nuestra startup en fase inicial.',
		author: 'Sean Grapevine',
		position: 'Fundador de',
		company: 'LoanShout',
	},
	{
		quote:
			'Trailmerge logra interpretar información dispersa sobre nuestras metas de diseño y UX, y organizarla de manera coherente y accionable.',
		author: 'Andy Binkley',
		position: 'Cofundador y CEO de',
		company: 'Tourial',
	},
];

export function getTestimonialsByLang(lang: 'en' | 'es'): Testimonial[] {
	return lang === 'es' ? testimonialsEs : testimonialsEn;
}

export function getTestimonialByAuthor(author: string, lang: 'en' | 'es'): Testimonial | undefined {
	const testimonials = getTestimonialsByLang(lang);
	return testimonials.find((t) => t.author === author);
}
