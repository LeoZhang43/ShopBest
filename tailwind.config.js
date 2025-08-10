/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all JS/TS/React files inside src folder and subfolders
    "./public/index.html",          // Also scan your main HTML file, if you have one
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

