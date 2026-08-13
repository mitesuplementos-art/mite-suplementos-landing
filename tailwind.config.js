/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
      colors: {
        mite: {
          green: '#97E622',
          dark: '#050505',
          charcoal: '#111411',
        },
      },
      boxShadow: {
        glow: '0 18px 60px rgba(151, 230, 34, 0.14)',
      },
    },
  },
  plugins: [],
}
