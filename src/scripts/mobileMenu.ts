// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
	const menuButton = document.querySelector('.menu-button');
	const navMenu = document.querySelector('.nav-menu-green');

	if (menuButton && navMenu) {
		menuButton.addEventListener('click', function() {
			navMenu.classList.toggle('active');
			menuButton.classList.toggle('active');
		});
	}
});
