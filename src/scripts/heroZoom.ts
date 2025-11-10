// Zoom effect for Hero backdrop (colored circles) on scroll
let ticking = false;

function updateZoom() {
	const heroSection = document.getElementById('hero-section');

	if (!heroSection) return;

	const scrolled = window.pageYOffset;
	const heroHeight = heroSection.offsetHeight;
	const scrollPercent = Math.min(scrolled / heroHeight, 1);

	// Scale from 1 to 1.3 based on scroll - applied to backdrop via CSS variable
	const scale = 1 + (scrollPercent * 0.3);

	heroSection.style.setProperty('--backdrop-scale', scale.toString());

	ticking = false;
}

function requestTick() {
	if (!ticking) {
		window.requestAnimationFrame(updateZoom);
		ticking = true;
	}
}

// Initialize on load
window.addEventListener('load', updateZoom);

// Update on scroll with passive event listener for better performance
window.addEventListener('scroll', requestTick, { passive: true });

// Update on resize
window.addEventListener('resize', updateZoom);
