/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
      },
      colors: {
        'primary-color': '#22c55e',
        'vibrant-green': '#22c55e',
        'lake-placid-blue': 'rgb(85, 108, 182)',
        'border-button-light': 'rgb(212, 108, 199)',
        'border-button-dark': 'rgb(34, 68, 179)',
        fontcolorII: 'rgb(85, 108, 182)',
        sitecolor: 'vibrant-green',
      },
      fontFamily: {
        alkalami: ['Alkalami', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              marginBottom: '0',
              textTransform: 'capitalize',
            },

            h2: {
              textTransform: 'capitalize',
              fontSize: '2rem',
              textAlign: 'center',
              marginTop: '1.5rem',
            },
            a: {
              textDecoration: 'underline',
              textDecorationColor: theme('colors.vibrant-green'),
              textDecorationThickness: '4px',
              '&:hover': {
                textDecorationColor: theme('colors.light-blue'),
              },
            },
            blockQuote: {
              borderLeft: '4px solid',
              borderLeftColor: theme('colors.vibrant-green'),
              '& p:first-of-type::before': {
                content: 'none',
              },
              a: {
                textAlign: 'center',
                textDecoration: 'none',
                color: 'black',
                fontColor: theme('colors.gray.500'),
                '&:hover': {
                  borderBottom: '2px',
                  borderBottomStyle: 'solid',
                  textDecoration: 'none',
                  borderBottomColor: theme('colors.black.400'),
                  color: 'black',
                },
              },
            },
          },
        },
      }),
    },
    backgroundImage: {
      landscaping: 'url(./assets/images/landscaping.jpg',
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
  ],
};
