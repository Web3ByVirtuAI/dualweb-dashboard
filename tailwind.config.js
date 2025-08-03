/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C1B33",         // Midnight Blue
        accent: "#8B5CF6",          // Electric Violet
        secondary: "#64748B",       // Slate Gray
        background: "#F8FAFC",      // Off-white
        success: "#34D399",         // Mint Green
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        code: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
