/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'chat-white': '#E1E1E6',
        'chat-black': '#1E1E1E',
        'chat-black-400': '#282843',
        'chat-black-500': '#1A1924',
        'chat-green-500': '#00B37E',
        'chat-green-600': '#07847E',
        'chat-pink': '#633BBC',
      },
    },
  },
  plugins: [],
}
