/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#e6f0f7',
          100: '#cce1ef',
          200: '#99c2df',
          300: '#66a3cf',
          400: '#3385bf',
          500: '#0066af',
          600: '#00528c',
          700: '#003366', // Lead color
          800: '#00264d',
          900: '#001a33',
        },
        sand: {
          50: '#fef9e7',
          100: '#fdf2cf',
          200: '#fbe69f',
          300: '#f9da6f',
          400: '#f7ce3f',
          500: '#f1c40f', // Lead color
          600: '#c19d0c',
          700: '#917609',
          800: '#604e06',
          900: '#302703',
        },
        teal: {
          50: '#e6f2f2',
          100: '#cce6e6',
          200: '#99cccc',
          300: '#66b2b2',
          400: '#339999',
          500: '#008080', // Lead color
          600: '#006666',
          700: '#004d4d',
          800: '#003333',
          900: '#001a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
       animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
