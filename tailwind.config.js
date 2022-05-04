const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    truncate: {
      lines: {
        2: '2',
        3: '3',
      },
    },
    extend: {
      colors: {
        'brand-1': '#7950F2',
        // error: defaultTheme.colors.red[400],
        littleblack: 'rgba(0, 0, 0, 0.5)',
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F6',
          200: '#E5E8EB',
          300: '#D1D6DB',
          400: '#B0B8C1',
          500: '#8D95A1',
          600: '#6D7684',
          700: '#4E5968',
          800: '#333D4B',
          900: '#191F28',
        },
      },
      spacing: {
        hml: '7.8125vw',
        hml2: '71.14583vw',
        hml3: '2.5vw',
        hws: '67.29167vw',
        hms: '1.99724vh',
        sti: '14.2vw',
        s1: '3.7vh',
        s2: '4.7vh',
      },
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        small: ['rem', { lineHeight: '1rem' }],
        10: ['0.625rem', { lineHeight: '0.7rem' }],
        11: ['0.6875rem', { lineHeight: '1rem' }],
        12: defaultTheme.fontSize.xs,
        13: ['0.8125rem', { lineHeight: '1.125rem' }],
        14: defaultTheme.fontSize.sm,
        15: ['0.9375rem', { lineHeight: '1.375rem' }],
        16: defaultTheme.fontSize.base,
        17: ['1.0625rem', { lineHeight: '1.625rem' }],
        18: defaultTheme.fontSize.lg,
        19: ['1.1875rem', { lineHeight: '1.875rem' }],
        20: defaultTheme.fontSize.xl,
        24: defaultTheme.fontSize['2xl'],
        28: ['1.75rem', { lineHeight: '2rem' }],
        30: defaultTheme.fontSize['3xl'],
        32: ['2rem', { lineHeight: '2.75rem' }],
        36: defaultTheme.fontSize['4xl'],
        48: defaultTheme.fontSize['5xl'],
        56: ['3.5rem', { lineHeight: '4.5rem' }],
        60: defaultTheme.fontSize['6xl'],
        72: defaultTheme.fontSize['7xl'],
        96: defaultTheme.fontSize['8xl'],
        128: defaultTheme.fontSize['9xl'],
      },
      width: {
        wi: '1920px',
        tew: '6.09375vw',
        wv: '1.25vw',
        wlo: '3.38541vw',
        wad: '41.66666vw',
        wse: '70.20833vw',

        wS: '13.22916vw',

        wsei: '1.25vw',

        w1: '15.83333vw',
      },
      height: {
        teh: '3.09917vh',
        he: '4.16666vh',
        he2: '20vh',
        he3: '4.26997vh',
        he4: '67vh',
        hv: '1.65289vh',
        hlo: '2.06611vh',
        had: '8.53994vh',
        hd2: '16.59779vh',
        hsei: '1.65289vh',
        hS: '17.49311vh',
        h1: '1.65289vh',

        screen: '100vh',
        'screen-5': 'calc( 100vh - 5rem )',
        'screen-10': 'calc( 100vh - 10rem )',
        'screen-15': 'calc( 100vh - 15rem )',
      },

      minWidth: {
        ...defaultTheme.spacing,
      },
      minHeight: {
        'screen-5': 'calc( 100vh - 5rem )',
        'screen-10': 'calc( 100vh - 10rem )',
        'screen-15': 'calc( 100vh - 15rem )',
      },
      marginLeft: {
        ma: '7.8125vh',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-truncate-multiline')(),
    require('./tailwind/filled'),
    require('./tailwind/outlined'),
    require('./tailwind/wh'),
  ],
};
