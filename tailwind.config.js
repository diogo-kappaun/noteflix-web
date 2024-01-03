/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      gridTemplateRows: {
        app: 'max-content 1fr',
        card: 'max-content max-content 1fr',
      },
      width: {
        cardWidth: 'min(48rem, 100%)',
        card: 'min(20rem, 100%)',
      },
      boxShadow: {
        input: 'inset 0 0 0 3px rgb(244 244 245)',
      },
      borderRadius: {
        'sm+': '4px',
      },
    },
  },
  plugins: [],
}
