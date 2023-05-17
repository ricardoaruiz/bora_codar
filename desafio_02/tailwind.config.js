/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato, sans-serif',
        crimson: 'Crimson Pro, serif',
      },
      colors: {
        main: '#D9CDF7',
        'main-hover': '#8a65e6',
        'purple-main': '#271A45',
      },
      fontSize: {
        xxs: '10px',
      },
    },
  },
  plugins: [],
}
