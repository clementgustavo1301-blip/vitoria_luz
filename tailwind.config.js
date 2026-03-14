/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: '#A58079',
          light: '#F8F1EF',
          accent: '#8B6B61',
          cream: '#FFF9F7',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        'care': '32px',
      }
    },
  },
  plugins: [],
}
