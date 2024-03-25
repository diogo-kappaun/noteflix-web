/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto Slab', 'serif'],
      },
      gridTemplateRows: {
        app: 'max-content 1fr',
        card: 'max-content max-content 1fr',
      },
      width: {
        cardWidth: 'min(48rem, 100%)',
        card: 'min(20rem, 100%)',
        page: 'min(70rem, 100%)',
        avatar: '10rem',
      },
      height: {
        avatar: '10rem',
        home: 'calc(100% - 96px)',
      },
      borderRadius: {
        'sm+': '4px',
      },
      screens: {
        smartphone: '340px',
      },
    },
  },
  plugins: [],
}
