/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#d91b24',
          'red-dark': '#b7121a',
          'red-light': '#ff2a35',
          navy: '#051329',
          'navy-dark': '#020b18',
          'navy-light': '#0a1d3f',
          'navy-deep': '#030814',
        },
        crccf: {
          navy: '#0A1945',
          darkBlue: '#051138',
          red: '#E50914',
          brightRed: '#FF1A26',
          deepRed: '#B90610',
          cyanGlow: '#00D2FF',
          filmBlue: '#002B66',
        },
        vintage: {
          paper: '#f9f6ed',
          paperBorder: '#dcd3be',
          paperDark: '#ede4ce',
          typewriterNavy: '#1b2633',
          typewriterDark: '#121a24',
          brassLight: '#fae19c',
          brass: '#d4af37',
          brassMedium: '#b89035',
          brassDark: '#7d5c19',
          keyCream: '#faf5e8',
          keyShadow: '#222831',
          crimson: '#b91c1c',
        },
        retro: {
          beige: '#e3dcce',
          beigeDark: '#c5beae',
          beigeLight: '#f4ede1',
          beigeShadow: '#9c9584',
          greyKey: '#797c85',
          greyKeyDark: '#5c5f66',
          crtBezel: '#181b20',
          crtScreen: '#f8fafc',
          navy: '#0b2545',
          navyDark: '#07162c',
          crimson: '#b91c1c',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        serifTitle: ['"Playfair Display"', 'Georgia', 'serif'],
        newspaper: ['"Special Elite"', '"Courier Prime"', 'Courier', 'monospace'],
        bodySerif: ['"Merriweather"', 'Georgia', 'serif'],
        vintageSans: ['"Cinzel"', '"Trajan Pro"', 'serif'],
        retro: ['"Share Tech Mono"', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'typewriter': '0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 10px 25px -5px rgba(0, 0, 0, 0.4)',
        'key': '0 4px 6px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -2px 3px rgba(0, 0, 0, 0.4)',
        'keyPressed': '0 1px 2px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.6)',
        'brassRim': 'inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        }
      }
    },
  },
  plugins: [],
}
