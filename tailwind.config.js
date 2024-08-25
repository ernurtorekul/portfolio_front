/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1280px",
      },
      backgroundColor: {
        primary: "white",
        violet: "#111827",
        secondary: "#f9f9f9",
      },
      colors: {
        primary: "white",
        violet: "#111827",
        secondary: "#6b6b6b",
      },
      spacing: {
        "1/6": "16.666%", // Custom spacing for ml-[16.666%]
      },
    },
  },
  plugins: [],
};
