/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Brand-palette remap (token names kept for zero structural change) */
        ivory: '#FFFFFF',
        'ivory-deep': '#F3F6F9',
        charcoal: '#173653',
        'charcoal-soft': '#45566A',
        forest: '#2367A5',
        'forest-deep': '#174C7B',
        'forest-mist': '#5A8FC0',
        saffron: '#F49A24',
        'saffron-soft': '#FFC16B',
        maroon: '#941F32',
        'maroon-soft': '#B72D3E',
        terracotta: '#B72D3E',
        'terracotta-soft': '#C45A6A',
        sage: '#75A92C',
        'sage-light': '#A8C96B',
        wheat: '#E2E8F0',
        cream: '#FFF8ED',
        sunflower: '#F4B942',
        'sunflower-soft': '#FAD27A',
        coral: '#941F32',
        'coral-soft': '#B72D3E',
        sky: '#5A8FC0',
        'sky-soft': '#A8D4F5',
        mint: '#5BA83A',
        'mint-soft': '#A8C96B',
        berry: '#174C7B',
        'berry-soft': '#5A8FC0',
        blossom: '#E7C3C9',
        'blossom-soft': '#F0D5DA',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serifAlt: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(23, 54, 83, 0.12)',
        editorial: '0 20px 50px -20px rgba(23, 54, 83, 0.2)',
      },
      letterSpacing: {
        editorial: '0.08em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '450': '450ms',
        '600': '600ms',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#45566A',
            a: { color: '#2367A5', textDecoration: 'none' },
            h1: { fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', color: '#173653' },
            h2: { fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.01em', color: '#173653' },
            h3: { fontFamily: 'Poppins, sans-serif', color: '#173653' },
            blockquote: { borderColor: '#941F32', fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', color: '#173653' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
