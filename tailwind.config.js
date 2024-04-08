/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1262AF',
      },
      gradientColorStopPositions: {
        33: '33%',
      },
      backgroundImage: {
        hero: 'url("/src/assets/images/hero-bg.png")',
      },
    },
  },
  plugins: [],
};
