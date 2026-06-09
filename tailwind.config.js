/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'solis': {
          // Mediterranean Modern Palette (from image)
          'olive':      '#979265',
          'sand':       '#e8dcc2',
          'sky':        '#b4cfe4',
          'terracotta': '#c26243',
          'navy':       '#305c7d',

          // Dark theme tokens (original deep blue)
          'bg':         '#021024',
          'secondary':  '#052659',
          'accent':     '#5483B3',
          'highlight':  '#7DA0CA',
          'text':       '#C1E8FF',

          // Light theme tokens
          'light-bg':   '#f5f0e8',
          'light-secondary': '#e8dcc2',
          'light-accent':    '#305c7d',
          'light-highlight': '#5483B3',
          'light-text':      '#1a2d3e',
        }
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'heading': ['"Playfair Display"', 'Georgia', 'serif'],
        'body':    ['"Manrope"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'widest': '0.35em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float':   'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
