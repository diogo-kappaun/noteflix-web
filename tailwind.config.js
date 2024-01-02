/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kashmir: {
          50: '#f4f8fa',
          100: '#e5edf4',
          200: '#d1e1ec',
          300: '#b2cdde',
          400: '#8db3cd',
          500: '#7299bf',
          600: '#5f84b1',
          700: '#5777a8',
          800: '#485e85',
          900: '#3e4f6a',
          950: '#293242',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
