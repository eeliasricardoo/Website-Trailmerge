
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();

async function debugPost() {
    console.log(`Debugging recent posts...`);

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

        // List recent posts
        const result = await client.execute("SELECT * FROM StudioCMSPageData ORDER BY publishedAt DESC LIMIT 5");

        if (result.rows.length === 0) {
            console.log("No posts found in StudioCMSPageData.");
        } else {
            console.log(`Found ${result.rows.length} posts. Details:`);
            console.log(JSON.stringify(result.rows, null, 2));

            // Dump all content rows to investigate
            console.log("Dumping StudioCMSPageContent table (LIMIT 5)...");
            const allContent = await client.execute("SELECT * FROM StudioCMSPageContent LIMIT 5");
            console.log(JSON.stringify(allContent.rows, null, 2));
        }

    } catch (e) {
        console.error("Error querying DB:", e);
    }
}

debugPost();
