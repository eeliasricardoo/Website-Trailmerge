import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			globals: {
				console: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				Buffer: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				setInterval: 'readonly',
				clearInterval: 'readonly',
				document: 'readonly',
				window: 'readonly',
				navigator: 'readonly',
				localStorage: 'readonly',
				sessionStorage: 'readonly',
				fetch: 'readonly',
				URL: 'readonly',
				URLSearchParams: 'readonly',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'prefer-const': 'error',
			'no-undef': 'off', // TypeScript handles this
		},
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsparser,
				extraFileExtensions: ['.astro'],
			},
			globals: {
				Astro: 'readonly',
				console: 'readonly',
				URL: 'readonly',
				Response: 'readonly',
				ImageMetadata: 'readonly',
			},
		},
		plugins: {
			astro: astroPlugin,
		},
		rules: {
			...astroPlugin.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': 'off',
			'no-undef': 'off', // Astro has its own scope
			'no-unused-vars': 'off',
		},
	},
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'.astro/**',
			'**/*.config.js',
			'**/*.config.mjs',
			'**/*.config.ts',
			'.husky/**',
			'scripts/**',
			'trailmerge-website-main/**',
			'Astro/**',
		],
	},
];
