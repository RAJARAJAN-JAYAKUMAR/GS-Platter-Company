/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logoGreen: '#304D30',
        gray: '#f1f1f1',
        contactGray:'#323335',
      },
      fontFamily: {
      belleza: ['Belleza', 'sans-serif'], nunito: ['Nunito', 'sans-serif'],
    },
  },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}