/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00ff88",
        void: "#0a0a0a",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      }
    },
  },
  plugins: [],
};
