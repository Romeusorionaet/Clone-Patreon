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
        custom_base_text: 'clamp(0.71rem, 0.90vw, 1rem)',
        custom_patreon: 'clamp(0.90rem, 1.4vw, 1.9rem)',
        custom_1: 'clamp(0.65rem, 0.75vw, 0.90rem)',
        custom_2: 'clamp(0.80rem, 1.1vw, 1.2rem)',
      },

      padding: {
        custom_container_header: 'clamp(1.25rem, 2.5vw, 3rem)',
        custom_1: 'clamp(0.60rem, 0.95vw, 1.4rem)',
        custom_2: 'clamp(5rem, 8vw, 12rem)',
      },

      spacing: {
        '16': '4rem',
      },

      gap: {
        custom_1: 'clamp(0.70rem, 1vw, 1.4rem)',
      },

      margin: {
        custom_1: 'clamp(1rem, 1.9vw, 2.5rem)',
      },

      width: {
        34: '134px',
      },

      height: {
        custom_1: 'clamp(34rem, 68vw, 68rem)',
        custom_2: 'clamp(34rem, 59vw, 60rem)',
      },

      screens: {
        md_custom_1: '832px',
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
