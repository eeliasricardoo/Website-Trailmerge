import { defineDb } from 'astro:db';

// StudioCMS will automatically configure its tables when useAstroDBIntegration is enabled
// This file is required by @astrojs/db
export default defineDb({
  tables: {}
});
