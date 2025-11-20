// Hybrid parallax script with smoothing (lerp)
// Supports complex, configured animations for the hero section
// and simple, generic animations for all other sections.

function lerp(start: number, end: number, amount: number): number {
	return (1 - amount) * start + amount * end;
}

// Original Layer configurations for the hero section
const LAYER_CONFIGS = [
	{
		className: 'layer-mountains',
		transform: (y: number, p: number) =>
			`translate(calc(-50% + 0px), ${y + p * 50}px) scale(${1 + p * 0.15})`,
	},
	{
		className: 'layer-clouds',
		transform: (y: number, p: number) =>
			`translate(calc(-50% + 0px), ${y}px) scale(${1 - p * 0.15})`,
	},
	{
		className: 'layer-blob',
		transform: (y: number, p: number) =>
			`rotate(1.867deg) translate(${p * 150}px, ${y - p * 100}px) scale(${1 - p * 0.7})`,
	},
	{
		className: 'layer-bird',
		transform: (y: number, p: number) =>
			`rotate(1.21deg) translate(${-p * 60}px, ${y + p * 40}px) scale(${1 + p * 0.5})`,
	},
	{
		className: 'layer-forest',
		transform: (y: number, p: number) => `translate(${-p * 50}px, ${y}px) scale(${1 + p * 0.3})`,
	},
	{
		className: 'layer-forest-right',
		transform: (y: number, p: number) => `translate(${p * 50}px, ${y}px) scale(${1 + p * 0.3})`,
	},
	{
		className: 'parallax-content',
		transform: (y: number, p: number) => `translateX(-50%) translateY(${p * 30}px)`,
	},
];

class ParallaxController {
	private container: HTMLElement;
	private layers: any[];
	private isVisible: boolean = false;
	private isHero: boolean = false;

	constructor(container: HTMLElement) {
		this.container = container;
		this.isHero = this.container.id === 'hero-section';
		const layerElements = this.container.querySelectorAll<HTMLElement>(
			'.parallax-layer, .parallax-content'
		);

		this.layers = Array.from(layerElements).map((element) => {
			const config = LAYER_CONFIGS.find((c) => element.classList.contains(c.className));
			return {
				element,
				speed: parseFloat(element.getAttribute('data-speed') || '0.1'),
				config: config,
				currentY: 0,
				targetY: 0,
				currentProgress: 0,
				targetProgress: 0,
			};
		});

		const observer = new IntersectionObserver(
			(entries) => {
				this.isVisible = entries[0].isIntersecting;
			},
			{ threshold: 0.01 }
		);
		observer.observe(this.container);

		this.updateTargets = this.updateTargets.bind(this);
		this.animate = this.animate.bind(this);
		this.initialize();
	}

	private initialize() {
		window.addEventListener('scroll', this.updateTargets, { passive: true });
		window.addEventListener('resize', this.updateTargets);
		this.updateTargets();
		this.animate();
	}

	private updateTargets() {
		if (!this.container) return;
		const scrolled = window.pageYOffset;

		if (this.isHero) {
			const heroHeight = this.container.offsetHeight;
			const scrollPercent = Math.min(scrolled / heroHeight, 1);
			this.layers.forEach((layer) => {
				layer.targetY = -(scrolled * layer.speed);
				layer.targetProgress = scrollPercent;
			});
		} else {
			if (!this.isVisible) return;
			const rect = this.container.getBoundingClientRect();
			const progress =
				(window.innerHeight - rect.top) / (window.innerHeight + this.container.offsetHeight);
			this.layers.forEach((layer) => {
				const yOffset = (progress - 0.5) * 200 * layer.speed;
				layer.targetY = -yOffset;
			});
		}
	}

	private animate() {
		if (!this.isHero && !this.isVisible) {
			requestAnimationFrame(this.animate);
			return;
		}

		const smoothing = 0.08;

		this.layers.forEach((layer) => {
			const previousY = layer.currentY;
			const previousProgress = layer.currentProgress;

			layer.currentY = lerp(layer.currentY, layer.targetY, smoothing);
			layer.currentProgress = lerp(layer.currentProgress, layer.targetProgress, smoothing);

			// Stop animation when close to target to save resources
			if (Math.abs(layer.currentY - layer.targetY) < 0.1) layer.currentY = layer.targetY;
			if (Math.abs(layer.currentProgress - layer.targetProgress) < 0.001)
				layer.currentProgress = layer.targetProgress;

			// Only update DOM if values actually changed significantly
			if (
				Math.abs(layer.currentY - previousY) > 0.01 ||
				Math.abs(layer.currentProgress - previousProgress) > 0.0001
			) {
				if (layer.config) {
					layer.element.style.transform = layer.config.transform(
						layer.currentY,
						layer.currentProgress
					);
				} else {
					layer.element.style.transform = `translateY(${layer.currentY}px)`;
				}
			}
		});

		requestAnimationFrame(this.animate);
	}
}

function initParallax() {
	// Manually control initialization to ensure Hero runs first and with the right container.
	const heroSection = document.getElementById('hero-section');
	if (heroSection) {
		new ParallaxController(heroSection);
	}

	const otherContainers = document.querySelectorAll<HTMLElement>(
		'.parallax-container:not(#hero-section)'
	);
	otherContainers.forEach((container) => {
		new ParallaxController(container);
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initParallax);
} else {
	initParallax();
}
