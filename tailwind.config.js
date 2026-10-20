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
          navy: {
            DEFAULT: '#0B192C',
            dark: '#060E1A',
            light: '#1E3E62',
            soft: '#254E70'
          },
          red: {
            DEFAULT: '#D90429',
            dark: '#B00020',
            light: '#EF233C',
            hover: '#C00424'
          },
          gold: {
            DEFAULT: '#F59E0B',
            dark: '#D97706',
            light: '#FDE68A',
            accent: '#EAB308'
          },
          solar: {
            green: '#10B981',
            blue: '#0284C7',
            sun: '#F59E0B'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        hindi: ['Rozha One', 'Tiro Devanagari Hindi', 'Poppins', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
}
