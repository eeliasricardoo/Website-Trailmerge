/**
 * URL Helper Utilities
 * Cross-platform compatible URL creation for Windows and Mac
 */

/**
 * Safely create a URL from a pathname and base URL
 * Handles cases where base URL might be undefined or invalid
 * 
 * @param pathname - The pathname to create URL from
 * @param base - The base URL (can be URL object, string, or undefined)
 * @param fallbackOrigin - Optional fallback origin if base is not available
 * @returns The full URL as a string, or the pathname as fallback
 */
export function safeCreateURL(
	pathname: string,
	base?: URL | string,
	fallbackOrigin?: string
): string {
	try {
		if (base) {
			const baseURL = typeof base === 'string' ? base : base.href;
			if (baseURL && baseURL.trim()) {
				return new URL(pathname, baseURL).href;
			}
		}
		
		// Fallback: use provided fallback origin
		if (fallbackOrigin) {
			return new URL(pathname, fallbackOrigin).href;
		}
		
		// Last resort: return just the pathname
		return pathname;
	} catch (error) {
		// If URL creation fails, return the pathname as fallback
		console.warn('Failed to create URL:', error);
		return pathname;
	}
}

