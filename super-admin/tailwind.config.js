/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { grotesk: ['Space Grotesk', 'sans-serif'] },
      colors: { oja: { black: '#050507', green: '#00FF88', gray: '#111116' } }
    },
  },
  plugins: [],
}
