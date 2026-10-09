/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F7F2',
        'ivory-deep': '#F1EFE6',
        charcoal: '#1F2924',
        'charcoal-soft': '#2E3B34',
        forest: '#2F5233',
        'forest-deep': '#213B25',
        'forest-mist': '#4A7B55',
        terracotta: '#B6583C',
        'terracotta-soft': '#D48871',
        sage: '#7A8B6F',
        'sage-light': '#B8C2AE',
        wheat: '#E4D9B8',
        cream: '#FBF9F4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        serifAlt: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(31, 41, 36, 0.12)',
        editorial: '0 20px 50px -20px rgba(31, 41, 36, 0.2)',
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
            color: '#1F2924',
            a: { color: '#2F5233', textDecoration: 'none' },
            h1: { fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' },
            h2: { fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em' },
            h3: { fontFamily: 'Playfair Display, serif' },
            blockquote: { borderColor: '#B6583C', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
