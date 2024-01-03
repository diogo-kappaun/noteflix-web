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
      gridTemplateColumns: {
        card: 'minmax(0rem, 45rem)',
      },
      width: {
        card: 'min(20rem, 100%)',
      },
    },
  },
  plugins: [],
}
