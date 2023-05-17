/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark1: '#1E1E1E',
        dark2: '#3C3748',

        primary: '#8257E5',
        'primary-disabled': '#9674E6',
        'primary-hover': '#9674E5',
        'primary-active': '#967FF9',
        secondary: '#3C3748',
        'secondary-hover': '#6A617F',
        'secondary-active': '#6A61AF',
      },
    },
  },
  plugins: [],
}
