import type { Config } from 'tailwindcss';

const config = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			backgroundColor: {
				primary: 'white',
				violet: '#4B40BB',
				secondary: '#f9f9f9',
			},
			colors: {
				primary: 'white',
				violet: '#4B40BB',
				secondary: '#343434',
			},
		},
	},
	plugins: [],
} satisfies Config;

export default config;
