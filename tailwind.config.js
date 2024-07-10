/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      },
      colors: {
        darkModeBG: 'hsl(207, 26%, 17%)',
        darkModeElement: 'hsl(209, 23%, 22%)',
        lightModeText: 'hsl(200, 15%, 8%)',
        lightModeBG: 'hsl(0, 0%, 98%)',
        lightModeHover: 'hsl(0, 0%, 95%)',
        darkModeHover: 'hsl(209, 23%, 25%)',
      }
    },
  },
  plugins: [],
}

