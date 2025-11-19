// Parallax effect for Hero section landscape layers with smoothing (lerp)

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
			const scale = 1 + scrollPercent * 0.15;
			const downOffset = scrollPercent * 50;
			return `translate(calc(-50% + 0px), ${yPos + downOffset}px) scale(${scale})`;
		},
		initialTransform: () => `translate(calc(-50% + 0px), 0px) scale(1)`,
	},
	{
		className: 'layer-clouds',
		transform: (yPos: number, scrollPercent: number) => {
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
			const scale = 1 + scrollPercent * 0.5;
			const downOffset = scrollPercent * 40;
			const leftOffset = -scrollPercent * 60;
			return `rotate(1.21deg) translate(${leftOffset}px, ${yPos + downOffset}px) scale(${scale})`;
		},
		initialTransform: () => `rotate(1.21deg) translate(0px, 0px) scale(1)`,
	},
	{
		className: 'layer-forest',
		transform: (yPos: number, scrollPercent: number) => {
			const scale = 1 + scrollPercent * 0.3;
			const xOffset = -scrollPercent * 100;
			return `translate(${xOffset}px, ${yPos}px) scale(${scale})`;
		},
		initialTransform: () => `translate(0px, 0px) scale(1)`,
	},
	{
		className: 'layer-forest-right',
		transform: (yPos: number, scrollPercent: number) => {
			const scale = 1 + scrollPercent * 0.3;
			const xOffset = scrollPercent * 100;
			return `translate(${xOffset}px, ${yPos}px) scale(${scale})`;
		},
		initialTransform: () => `translate(0px, 0px) scale(1)`,
	},
];

function lerp(start: number, end: number, amount: number): number {
	return (1 - amount) * start + amount * end;
}

function initParallax() {
	const heroSection = document.getElementById('hero-section');
	if (!heroSection) return;

	const parallaxLayers = heroSection.querySelectorAll<HTMLElement>('.parallax-layer');
	if (parallaxLayers.length === 0) return;

	const contentContainer = heroSection.querySelector<HTMLElement>('.parallax-content');

	// State for each layer
	const layerStates = Array.from(parallaxLayers).map((layer) => ({
		layer,
		currentY: 0,
		targetY: 0,
		currentScrollPercent: 0,
		targetScrollPercent: 0,
		speed: parseFloat(layer.getAttribute('data-speed') || '0.5'),
		config: LAYER_CONFIGS.find((config) => layer.classList.contains(config.className)) || null,
	}));

	const contentState = {
		currentDownOffset: 0,
		targetDownOffset: 0,
	};

	function updateTargets() {
		if (!heroSection) return;

		const scrolled = window.pageYOffset;
		const heroHeight = heroSection.offsetHeight;
		const scrollPercent = Math.min(scrolled / heroHeight, 1);

		layerStates.forEach((state) => {
			state.targetY = -(scrolled * state.speed);
			state.targetScrollPercent = scrollPercent;
		});

		if (contentContainer) {
			contentState.targetDownOffset = scrollPercent * 30; // Move down up to 30px
		}
	}

	function animate() {
		const smoothing = 0.08; // Adjust this value for more/less smoothing

		layerStates.forEach((state) => {
			state.currentY = lerp(state.currentY, state.targetY, smoothing);
			state.currentScrollPercent = lerp(
				state.currentScrollPercent,
				state.targetScrollPercent,
				smoothing
			);

			// Avoid tiny movements to stop animation when idle
			if (Math.abs(state.currentY - state.targetY) < 0.5) {
				state.currentY = state.targetY;
			}
			if (Math.abs(state.currentScrollPercent - state.targetScrollPercent) < 0.001) {
				state.currentScrollPercent = state.targetScrollPercent;
			}

			if (state.config) {
				state.layer.style.transform = state.config.transform(
					state.currentY,
					state.currentScrollPercent
				);
			} else {
				state.layer.style.transform = `translateY(${state.currentY}px)`;
			}
		});

		if (contentContainer) {
			contentState.currentDownOffset = lerp(
				contentState.currentDownOffset,
				contentState.targetDownOffset,
				smoothing
			);
			if (Math.abs(contentState.currentDownOffset - contentState.targetDownOffset) < 0.5) {
				contentState.currentDownOffset = contentState.targetDownOffset;
			}
			contentContainer.style.transform = `translateX(-50%) translateY(${contentState.currentDownOffset}px)`;
		}

		window.requestAnimationFrame(animate);
	}

	function initialize() {
		layerStates.forEach(({ layer, config }) => {
			if (config) {
				layer.style.transform = config.initialTransform();
			} else {
				layer.style.transform = `translateY(0px)`;
			}
		});

		updateTargets();
		animate();

		window.addEventListener('scroll', updateTargets, { passive: true });
		window.addEventListener('resize', updateTargets);
	}

	initialize();
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initParallax);
} else {
	initParallax();
}
