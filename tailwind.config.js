/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./path/to/your/css/*.css", 
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam-pro': ["Be Vietnam Pro", "serif"],
      },
    },
  },
  plugins: [],
}