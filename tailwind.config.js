/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColor': '#080000',
        'bgColor': '#F8F8F8',
        'contrastColor': '#FB923C'
      }
    },
  },
  plugins: [],
}

