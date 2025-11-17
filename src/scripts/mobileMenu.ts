// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
	const menuButton = document.querySelector('.menu-button') as HTMLButtonElement;
	const navMenu = document.querySelector('.nav-menu-green') as HTMLElement;

	if (menuButton && navMenu) {
		// Set initial aria-expanded state
		const isExpanded = navMenu.classList.contains('active');
		menuButton.setAttribute('aria-expanded', isExpanded.toString());

		menuButton.addEventListener('click', function () {
			const isCurrentlyExpanded = navMenu.classList.contains('active');

			navMenu.classList.toggle('active');
			menuButton.classList.toggle('active');

			// Update aria-expanded
			menuButton.setAttribute('aria-expanded', (!isCurrentlyExpanded).toString());
		});

		// Close menu with Escape key
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && navMenu.classList.contains('active')) {
				navMenu.classList.remove('active');
				menuButton.classList.remove('active');
				menuButton.setAttribute('aria-expanded', 'false');
				menuButton.focus();
			}
		});

		// Trap focus inside menu when open
		const focusableElements = navMenu.querySelectorAll(
			'a, button, [tabindex]:not([tabindex="-1"])'
		);
		const firstFocusable = focusableElements[0] as HTMLElement;
		const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

		navMenu.addEventListener('keydown', function (e) {
			if (!navMenu.classList.contains('active')) return;

			if (e.key === 'Tab') {
				if (e.shiftKey) {
					// Shift + Tab
					if (document.activeElement === firstFocusable) {
						e.preventDefault();
						lastFocusable.focus();
					}
				} else {
					// Tab
					if (document.activeElement === lastFocusable) {
						e.preventDefault();
						firstFocusable.focus();
					}
				}
			}
		});
	}
});
