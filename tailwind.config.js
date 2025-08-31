/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mas: {
          primary: '#1e40af',
          secondary: '#3b82f6',
          accent: '#60a5fa',
          dark: '#1e3a8a',
          light: '#dbeafe',
        },
      },
    },
  },
  plugins: [],
}