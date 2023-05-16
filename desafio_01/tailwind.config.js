/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0F0D13',
        'purple-player': '#2A2141',
        'band-text': '#E1E1E6',
        progress: '#D9D9D9',
        time: '#C4C4CC',
      },
      spacing: {
        'player1-width': '266px',
        'player2-width': '357px',
      },
    },
  },
  plugins: [],
}
