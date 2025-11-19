// Parallax effect for Hero section landscape layers
interface LayerConfig {
	className: string;
	// eslint-disable-next-line no-unused-vars
	transform: (yPos: number) => string;
	initialTransform: () => string;
}

// Layer configurations with their specific transform functions
const LAYER_CONFIGS: LayerConfig[] = [
	{
		className: 'layer-mountains',
		transform: (yPos: number) => `translate(calc(-50% + 0px), ${yPos}px)`,
		initialTransform: () => `translate(calc(-50% + 0px), 0px)`,
	},
	{
		className: 'layer-clouds',
		transform: (yPos: number) => `translate(calc(-50% + 0px), ${yPos}px)`,
		initialTransform: () => `translate(calc(-50% + 0px), 0px)`,
	},
	{
		className: 'layer-blob',
		transform: (yPos: number) => `rotate(1.867deg) translateY(${yPos}px)`,
		initialTransform: () => `rotate(1.867deg) translateY(0px)`,
	},
	{
		className: 'layer-bird',
		transform: (yPos: number) => `rotate(1.21deg) translateY(${yPos}px)`,
		initialTransform: () => `rotate(1.21deg) translateY(0px)`,
	},
	{
		className: 'layer-forest',
		transform: (yPos: number) => `translateY(${yPos}px)`,
		initialTransform: () => `translateY(0px)`,
	},
	{
		className: 'layer-forest-right',
		transform: (yPos: number) => `translateY(${yPos}px)`,
		initialTransform: () => `translateY(0px)`,
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
	function applyTransform(layer: HTMLElement, yPos: number) {
		const config = getLayerConfig(layer);
		if (config) {
			layer.style.transform = config.transform(yPos);
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

	// Update parallax based on scroll position
	function updateParallax() {
		if (!heroSection) return;

		const scrolled = window.pageYOffset;

		parallaxLayers.forEach((layer) => {
			const speed = parseFloat(layer.getAttribute('data-speed') || '0.5');
			const yPos = -(scrolled * speed);
			applyTransform(layer, yPos);
		});

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
