// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Important for scanning your main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Scans all JS, TS, JSX, TSX files in src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
