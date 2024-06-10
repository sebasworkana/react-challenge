/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 自訂顏色
      colors: {
        primary: '#e1e1e1',
        secondary: '#044730',
        background: '#212121',
      },
    },
  },
  plugins: [],
}
