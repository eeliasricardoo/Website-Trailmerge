
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();

async function debugPost() {
    const slug = 'uxui'; // Based on previous user logs
    console.log(`Debugging post with slug: ${slug}`);

    try {
        // We can't easily import 'studiocms:sdk' in a standalone script without the Astro environment.
        // Instead, let's query the database directly to see what's stored.

        const dbUrl = process.env.ASTRO_DB_REMOTE_URL;
        const dbToken = process.env.ASTRO_DB_APP_TOKEN;

        if (!dbUrl || !dbToken) {
            console.error("Database credentials not found in env");
            return;
        }

        const client = createClient({
            url: dbUrl,
            authToken: dbToken,
        });

        // Query the StudioCMSBlogPages table (assuming it's named something like that based on previous schema files)
        // Wait, let's list tables or guess the name. Usually `StudioCMSBlogPages` or just `StudioCMSPages`?
        // In `view_file` of `db/config.ts` earlier, tables were empty?
        // In `studiocms.config.mjs` it uses `@studiocms/blog`.

        // Query StudioCMSPageData
        const result = await client.execute("SELECT * FROM StudioCMSPageData WHERE slug = 'uxui' OR slug = '/uxui'");

        if (result.rows.length === 0) {
            console.log("No post found in table StudioCMSPageData. Trying to list all slugs...");
            const allSlugs = await client.execute("SELECT slug, title FROM StudioCMSPageData LIMIT 10");
            console.log("First 10 slugs:", allSlugs.rows);
        } else {
            const pageData = result.rows[0];
            console.log("Found in StudioCMSPageData:", pageData);

            // Dump all content rows to investigate
            console.log("Refusing to guess content ID. Dumping StudioCMSPageContent table (LIMIT 10)...");
            const allContent = await client.execute("SELECT * FROM StudioCMSPageContent LIMIT 10");
            allContent.rows.forEach(row => {
                console.log("Content Row:", row);
            });
        }

    } catch (e) {
        console.error("Error querying DB:", e);
    }
}

debugPost();
