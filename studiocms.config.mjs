import { defineStudioCMSConfig } from 'studiocms/config';
import studioCMSMd from '@studiocms/md';
import studioCMSBlog from '@studiocms/blog';

export default defineStudioCMSConfig({
    dbStartPage: false, // Setup complete - disabled as instructed
    verbose: true, // Enable verbose to see what routes are being created
    plugins: [
        studioCMSMd(),
        studioCMSBlog(),
    ],
    dashboardConfig: {
        inject404Route: false,
    },
});
