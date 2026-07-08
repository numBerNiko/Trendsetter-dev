/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F5F5DC',
        'neutral-bg': '#EAE6DF',
        'slate': '#1A2421',
        'deep-teal': '#1B4D3E',
        'coral': '#D8D3CC',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
