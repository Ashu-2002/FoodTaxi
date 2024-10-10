/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        trebuchet: ['Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

