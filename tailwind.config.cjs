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
        'primary-color': '#16a34a',
        'primary-hover': '#15803d',
      },
      fontFamily: {
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
              textDecorationColor: theme('colors.primary-color'),
              textDecorationThickness: '4px',
              '&:hover': {
                textDecorationColor: theme('colors.primary-hover'),
              },
            },
            blockQuote: {
              borderLeft: '4px solid',
              borderLeftColor: theme('colors.primary-color'),
              '& p:first-of-type::before': {
                content: 'none',
              },
              a: {
                textAlign: 'center',
                textDecoration: 'none',

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
