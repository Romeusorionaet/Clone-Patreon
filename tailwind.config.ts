import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      variants: {
        extend: {
          content: ['before', 'after'],
        },
      },

      fontFamily: {
        inter: 'var(--font-inter)',
      },

      fontSize: {
        custom_base_text: 'clamp(0.70rem, 1vw, 1.1rem)',
        custom_patreon: 'clamp(0.90rem, 1.3vw, 1.8rem)',
        custom_1: 'clamp(0.65rem, 0.75vw, 0.90rem)',
      },

      padding: {
        custom_container_header: 'clamp(1.25rem, 2.5vw, 3rem)',
        custom_1: 'clamp(0.60rem, 0.80vw, 1.5rem)',
        custom_2: 'clamp(5rem, 8vw, 12rem)',
      },

      spacing: {
        '16': '4rem',
      },

      gap: {
        custom_1: 'clamp(0.70rem, 1.1vw, 1.6rem)',
      },

      margin: {
        custom_1: 'clamp(1rem, 1.9vw, 2.5rem)',
      },

      screens: {
        md_middle: '850px',
      },

      animation: {
        'rise-from-bottom': 'riseFromBottom 0.4s ease-out forwards',
      },

      keyframes: {
        riseFromBottom: {
          '0%': {
            transform: 'translateY(200%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
