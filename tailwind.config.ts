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
      },

      padding: {
        custom_container_header: 'clamp(1.25rem, 2.5vw, 3rem)',
        custom_1: 'clamp(0.60rem, 0.80vw, 1.5rem)',
      },

      spacing: {
        '16': '4rem',
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
