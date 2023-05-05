/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: {
        900: '#222831',
        700: '#393E46',
        300: '#B3B3B3',
        200: '#CCCCCC',
        100: '#E6E6E6',
      },
      primary: '#D65A31',
      alert: {
        green: '#5D9C59',
        yellow: '#DF2E38',
        red: '#FFB800',
      },
    },
    backgroundImage: {
      'banner-overlay':
        'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.4) 0%, rgba(34, 40, 49, 0.8) 100%)',
      'banner-top': "url('/top.png')",
      'banner-mid': "url('/mid.png')",
      'banner-bot': "url('/bot.png')",
      'banner-form': "url('/form.avif')",
    },
    extend: {
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(100%)' },
          '50%': { transform: 'scale(105%)' },
        },
      },
      animation: { breathe: 'breathe 5s ease infinite' },
    },
  },
  plugins: [],
}
