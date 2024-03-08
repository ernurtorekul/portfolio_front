/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
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
};
