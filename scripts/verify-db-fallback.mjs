
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();

async function checkFallback() {
    const slug = 'uxui'; // The slug from the user request
    console.log(`Checking DB fallback for slug: ${slug}`);

    try {
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

        // 1. Get the Page ID first
        const pageResult = await client.execute({
            sql: "SELECT id, title, heroImage FROM StudioCMSPageData WHERE slug = ? OR slug = ?",
            args: [slug, '/' + slug]
        });

        if (pageResult.rows.length === 0) {
            console.log("Page not found in StudioCMSPageData.");
            return;
        }

        const page = pageResult.rows[0];
        console.log("Page found:", page);

        // 2. Query Content using the logic from the component
        const contentResult = await client.execute({
            sql: "SELECT content FROM StudioCMSPageContent WHERE contentId IN (SELECT id FROM StudioCMSPageData WHERE slug = ? OR slug = ?)",
            args: [slug, '/' + slug]
        });

        if (contentResult.rows.length > 0 && contentResult.rows[0].content) {
            console.log("[SUCCESS] Content found in DB via fallback query.");
            console.log("Content start:", contentResult.rows[0].content.substring(0, 50));
        } else {
            console.log("[FAILURE] Content NOT found via fallback query.");
        }

    } catch (e) {
        console.error("Error querying DB:", e);
    }
}

checkFallback();
