/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00d4ff',
        secondary: '#ff006e',
        'text-light': '#f0f0f0',
        'text-muted': '#a0a0a0',
        'card-bg': 'rgba(255, 255, 255, 0.05)'
      }
    }
  },
  plugins: []
};
