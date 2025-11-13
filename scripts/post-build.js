import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const indexPath = join(__dirname, '..', 'dist', 'index.html');

const indexContent = `<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Redirecting...</title>
	<meta name="robots" content="noindex">
	<script>
	// Ultra-fast redirect - executes before any rendering
	(function(){
		var l=(navigator.language||navigator.userLanguage||'en').toLowerCase();
		window.location.replace(l.startsWith('es')?'/es/':'/en/');
	})();
	</script>
	<noscript>
		<meta http-equiv="refresh" content="0;url=/en/">
	</noscript>
</head>
<body>
	<p>Redirecting based on your language preference...</p>
	<p><a href="/en/">English</a> | <a href="/es/">Español</a></p>
</body>
</html>`;

writeFileSync(indexPath, indexContent);
console.log('✓ Generated custom index.html with language detection');
