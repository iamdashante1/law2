import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        sand: '#f7f3ec',
        cream: '#fdfaf4',
        charcoal: '#1b1a18',
        ebony: '#0f0e0c',
        accent: '#b4572e',
        // amber: '#f1c9a7',
        linen: '#ede4d7',
        smoke: '#51493f',
        moss: '#9f8b73',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        display: ['var(--font-display)', 'serif'],
      },
      boxShadow: {},
      borderRadius: {
        '4xl': '2.75rem',
      },
    },
  },
  plugins: [],
}

export default config
