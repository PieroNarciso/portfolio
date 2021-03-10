const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4B5563',
          DEFAULT: '#374151',
          dark: '#1F2937',
        },
        secondary: {
          light: '#FECACA',
          DEFAULT: '#FCA5A5',
          dark: '#F87171'
        },
        coolWhite: {
          light: '#FAFAFA',
          DEFAULT: '#F4F4F5',
          dark: '#E4E4E7',
        },
        brown: {
          light: '#D4D4D8',
          DEFAULT: '#A1A1AA',
          dark: '#71717A'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
