/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: { glow: '0 12px 30px rgba(16, 185, 129, .18)' },
    },
  },
  plugins: [],
}
