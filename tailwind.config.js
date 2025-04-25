/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use class-based toggling for dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Include your source files
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },},
  },
  plugins: [],

  future: {
    hoverOnlyWhenSupported: true,
  },
  // Enable backdrop-blur
  variants: {
    extend: {
      backdropBlur: ['responsive'],
    },
  },
};

