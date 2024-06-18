// tailwind.config.js

// @ts-check

/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '400px',  // Small devices (phones)
        'md': '768px',  // Medium devices (tablets)
      },
      height: {
        '250': '250px',
      },
      maxHeight: {
        '40rem': '40rem', // Adding custom max-height of 40rem
      },
      keyframes: {
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideOutToTop: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
      },
      animation: {
        slideInFromBottom: 'slideInFromBottom 0.5s ease-out',
        slideOutToTop: 'slideOutToTop 0.5s ease-in',
      },
      spacing: {
        'header': '3rem', // Adjust the header spacing as needed
      },
      colors: {
        'primary': '#DAC5A7',
        'primary-light': 'rgba(218, 197, 167, 0.1)',
        'primary-dark': '#DAAA65'
      },
      fontFamily: {
        // Define your custom fonts here if needed
      },
    },
  },
  plugins: [],
};
