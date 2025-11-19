// Parallax effect for Hero section landscape layers
interface LayerConfig {
	className: string;
	// eslint-disable-next-line no-unused-vars
	transform: (yPos: number, scrollPercent: number) => string;
	initialTransform: () => string;
}

// Layer configurations with their specific transform functions
const LAYER_CONFIGS: LayerConfig[] = [
	{
		className: 'layer-mountains',
		transform: (yPos: number, scrollPercent: number) => {
			// Scale from 1 to 1.15 (15% bigger) and move down a bit
			const scale = 1 + scrollPercent * 0.15;
			const downOffset = scrollPercent * 50; // Move down up to 50px
			return `translate(calc(-50% + 0px), ${yPos + downOffset}px) scale(${scale})`;
		},
		initialTransform: () => `translate(calc(-50% + 0px), 0px) scale(1)`,
	},
	{
		className: 'layer-clouds',
		transform: (yPos: number, scrollPercent: number) => {
			// Scale from 1 to 0.85 (15% smaller)
			const scale = 1 - scrollPercent * 0.15;
			return `translate(calc(-50% + 0px), ${yPos}px) scale(${scale})`;
		},
		initialTransform: () => `translate(calc(-50% + 0px), 0px) scale(1)`,
	},
	{
		className: 'layer-blob',
		// eslint-disable-next-line no-unused-vars
		transform: (yPos: number, _scrollPercent: number) => `rotate(1.867deg) translateY(${yPos}px)`,
		initialTransform: () => `rotate(1.867deg) translateY(0px)`,
	},
	{
		className: 'layer-bird',
		transform: (yPos: number, scrollPercent: number) => {
			// Scale from 1 to 1.5 (50% bigger), move down and left
			const scale = 1 + scrollPercent * 0.5;
			const downOffset = scrollPercent * 40; // Move down up to 40px
			const leftOffset = -scrollPercent * 60; // Move left up to 60px
			return `rotate(1.21deg) translate(${leftOffset}px, ${yPos + downOffset}px) scale(${scale})`;
		},
		initialTransform: () => `rotate(1.21deg) translate(0px, 0px) scale(1)`,
	},
	{
		className: 'layer-forest',
		transform: (yPos: number, scrollPercent: number) => {
			// Scale from 1 to 1.3 (30% bigger) and move left (negative X)
			const scale = 1 + scrollPercent * 0.3;
			const xOffset = -scrollPercent * 100; // Move left up to 100px
			return `translate(${xOffset}px, ${yPos}px) scale(${scale})`;
		},
		initialTransform: () => `translate(0px, 0px) scale(1)`,
	},
	{
		className: 'layer-forest-right',
		transform: (yPos: number, scrollPercent: number) => {
			// Scale from 1 to 1.3 (30% bigger) and move right (positive X)
			const scale = 1 + scrollPercent * 0.3;
			const xOffset = scrollPercent * 100; // Move right up to 100px
			return `translate(${xOffset}px, ${yPos}px) scale(${scale})`;
		},
		initialTransform: () => `translate(0px, 0px) scale(1)`,
	},
];

function initParallax() {
	const heroSection = document.getElementById('hero-section');
	if (!heroSection) return;

	const parallaxLayers = heroSection.querySelectorAll<HTMLElement>('.parallax-layer');
	if (parallaxLayers.length === 0) return;

	let ticking = false;

	// Find layer config for a given element
	function getLayerConfig(layer: HTMLElement): LayerConfig | null {
		return LAYER_CONFIGS.find((config) => layer.classList.contains(config.className)) || null;
	}

	// Apply transform to a layer
	function applyTransform(layer: HTMLElement, yPos: number, scrollPercent: number) {
		const config = getLayerConfig(layer);
		if (config) {
			layer.style.transform = config.transform(yPos, scrollPercent);
		} else {
			// Default transform for layers without specific config
			layer.style.transform = `translateY(${yPos}px)`;
		}
	}

	// Initialize layer transforms
	function initializeLayers() {
		parallaxLayers.forEach((layer) => {
			const config = getLayerConfig(layer);
			if (config) {
				layer.style.transform = config.initialTransform();
			} else {
				layer.style.transform = `translateY(0px)`;
			}
		});
	}

	// Update parallax for content text
	function updateContentParallax(scrollPercent: number) {
		const contentContainer = heroSection.querySelector<HTMLElement>('.parallax-content');
		if (contentContainer) {
			// Move down a bit, similar to mountains but less
			const downOffset = scrollPercent * 30; // Move down up to 30px
			// Preserve translateX(-50%) and add translateY
			contentContainer.style.transform = `translateX(-50%) translateY(${downOffset}px)`;
		}
	}

	// Update parallax based on scroll position
	function updateParallax() {
		if (!heroSection) return;

		const scrolled = window.pageYOffset;
		const heroHeight = heroSection.offsetHeight;
		const scrollPercent = Math.min(scrolled / heroHeight, 1);

		parallaxLayers.forEach((layer) => {
			const speed = parseFloat(layer.getAttribute('data-speed') || '0.5');
			const yPos = -(scrolled * speed);
			applyTransform(layer, yPos, scrollPercent);
		});

		// Update content parallax
		updateContentParallax(scrollPercent);

		ticking = false;
	}

	// Request animation frame for smooth updates
	function requestTick() {
		if (!ticking) {
			window.requestAnimationFrame(updateParallax);
			ticking = true;
		}
	}

	// Initialize layers on load
	initializeLayers();
	updateParallax();

	// Add scroll event listener with passive flag for better performance
	window.addEventListener('scroll', requestTick, { passive: true });

	// Update on resize to recalculate positions
	window.addEventListener('resize', updateParallax);
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initParallax);
} else {
	initParallax();
}
