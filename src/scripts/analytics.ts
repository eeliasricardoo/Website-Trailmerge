// Analytics tracking for Plausible
declare global {
	interface Window {
		plausible: any;
	}
}

export function initAnalytics() {
	window.plausible =
		window.plausible ||
		function () {
			(window.plausible.q = window.plausible.q || []).push(arguments);
		};
}

export function trackNavEvents() {
	const navLogo = document.getElementById('nav-logo');
	const navServices = document.getElementById('nav-services');
	const navTalent = document.getElementById('nav-talent');
	const navAbout = document.getElementById('nav-about');
	const navBlog = document.getElementById('nav-blog');
	const navContact = document.getElementById('nav-contact');
	const heroContact = document.getElementById('hero-contact');
	const servicesButton = document.getElementById('services-button');
	const auditButton = document.getElementById('audit-button');
	const footerContact = document.getElementById('footer-contact');

	if (navLogo) navLogo.addEventListener('click', () => window.plausible('Nav Logo - Home'));
	if (navServices)
		navServices.addEventListener('click', () => window.plausible('Nav Services - Home'));
	if (navTalent) navTalent.addEventListener('click', () => window.plausible('Nav Talent - Home'));
	if (navAbout) navAbout.addEventListener('click', () => window.plausible('Nav About - Home'));
	if (navBlog) navBlog.addEventListener('click', () => window.plausible('Nav Blog - Home'));
	if (navContact)
		navContact.addEventListener('click', () => window.plausible('Nav Contact Button - Home'));
	if (heroContact)
		heroContact.addEventListener('click', () => window.plausible('Hero Contact Button - Home'));
	if (servicesButton)
		servicesButton.addEventListener('click', () => window.plausible('Services Button - Home'));
	if (auditButton)
		auditButton.addEventListener('click', () => window.plausible('Audit Button - Home'));
	if (footerContact)
		footerContact.addEventListener('click', () => window.plausible('Footer Contact Button - Home'));
}

export function trackModalEvents() {
	const modalName = document.getElementById('modal-name');
	const modalEmail = document.getElementById('modal-email');
	const modalMessage = document.getElementById('modal-message');
	const modalOptin = document.getElementById('modal-optin');
	const modalSubmit = document.getElementById('modal-submit');

	if (modalName) modalName.addEventListener('click', () => window.plausible('Name Input - Home'));
	if (modalEmail)
		modalEmail.addEventListener('click', () => window.plausible('Email Input - Home'));
	if (modalMessage)
		modalMessage.addEventListener('click', () => window.plausible('Message Input - Home'));
	if (modalOptin)
		modalOptin.addEventListener('click', () => window.plausible('Opt-in Checkbox - Home'));
	if (modalSubmit)
		modalSubmit.addEventListener('click', () => window.plausible('Submit Button - Home'));
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		trackNavEvents();
		trackModalEvents();
	});
} else {
	trackNavEvents();
	trackModalEvents();
}
