/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"IBM Plex Sans", sans-serif'],
        secondary: ['"IBM Plex Sans Condensed", sans-serif']
      } 
    },
  },
  plugins: [],
}