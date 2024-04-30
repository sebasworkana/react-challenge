const sizes = {};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: sizes,
      minHeight: sizes,
      minWidth: sizes,
      maxHeight: sizes,
      maxWidth: sizes,
      borderRadius: sizes,
      fontSize: {
        xs: ['12px', '20px'],
        sm: ['14px', '22px'],
        base: ['16px', '24px'],
        lg: ['18px', '24px'],
        xl: ['22px', '27px'],
        '2xl': ['32px', '40px'],
        '3xl': ['104px', '120px']
      },
      colors: {
        success: '#044830',
        dark: '#1c1c1c',
        gray: {
          10: '#b2b2b2',
          20: '#d6d6d6'
        }
      }
    }
  },
  plugins: [],
}

