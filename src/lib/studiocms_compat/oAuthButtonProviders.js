import { StudioCMSRoutes } from 'studiocms:lib';
import { oAuthButtons } from 'studiocms:plugins/auth/providers';
const providerData = oAuthButtons.map(({ enabled, image, label, safeName }) => ({
	enabled,
	href: StudioCMSRoutes.authLinks.oAuthIndex(safeName),
	label,
	image,
}));
const showOAuth = providerData.some((provider) => provider.enabled);
export { providerData, showOAuth };
