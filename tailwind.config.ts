import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
      screens: { lg: "1024px", xl: "1200px", "2xl": "1400px" },
    },
    extend: {
      colors: {
        brand: {
          50: '#f3faf7',
          100: '#e6f5ee',
          200: '#c8e6da',
          300: '#a9d7c7',
          400: '#6ebaa0',
          500: '#2e9c79',
          600: '#237a60',
          700: '#1d6150',
          800: '#164a3d',
          900: '#0f342b',
          950: '#0a251f',
        },
        accent: '#c47a2c',
      },
      fontFamily: {
        display: ['var(--font-merriweather)'],
        sans: ['var(--font-source-sans)'],
      },
      borderRadius: {
        xl: '14px',
      }
    },
  },
  plugins: [],
}

export default config

