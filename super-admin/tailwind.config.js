/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        oja: { black: '#050507', green: '#00FF88' }
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
