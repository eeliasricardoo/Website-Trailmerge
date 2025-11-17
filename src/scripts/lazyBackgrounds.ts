// Lazy load background images using Intersection Observer
const lazyBackgrounds = () => {
	const imageObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = entry.target as HTMLElement;
					const bgImage = element.dataset.bgImage;

					if (bgImage) {
						element.style.backgroundImage = `url('${bgImage}')`;
						element.classList.add('bg-loaded');
						observer.unobserve(element);
					}
				}
			});
		},
		{
			rootMargin: '50px 0px', // Start loading 50px before element comes into view
			threshold: 0.01,
		}
	);

	// Observe all elements with data-bg-image attribute
	const bgElements = document.querySelectorAll('[data-bg-image]');
	bgElements.forEach((el) => imageObserver.observe(el));
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', lazyBackgrounds);
} else {
	lazyBackgrounds();
}
