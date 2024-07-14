/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cli-bg': '#1E1E1E',
        'cli-box': '#2D2D2D',
        'cli-text': '#FFFFFF',
        'cli-secondary': '#B0B0B0',
        'cli-accent': '#61DAFB',
      },
    },
  },
  plugins: [],
}