import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      inset: {
        '1/5': '20%',
        '6/100': '6%',
        '12/100': '12%',
      },

      variants: {
        extend: {
          content: ['before', 'after'],
        },
      },

      colors: {
        c1: '#000',
        c2: '#fff',
      },

      fontFamily: {
        inter: 'var(--font-inter)',
      },

      fontSize: {
        custom_base_text: 'clamp(0.71rem, 0.90vw, 1rem)',
        custom_patreon: 'clamp(0.90rem, 1.4vw, 1.9rem)',
        custom_1: 'clamp(0.65rem, 0.75vw, 0.90rem)',
        custom_2: 'clamp(0.80rem, 1.1vw, 1.2rem)',
        custom_3: 'clamp(5rem, 12vw, 14rem)',
        custom_4: 'clamp(0.80rem, 1.2vw, 1.6rem)',
        custom_5: 'clamp(3rem, 9vw, 9rem)',
        custom_6: 'clamp(1.4rem, 1.5vw, 1.6rem)',
        custom_7: 'clamp(0.90rem, 1vw, 1.2rem)',
        custom_8: 'clamp(1.2rem, 2.5vw, 2.8rem)',
        custom_9: 'clamp(1.8rem, 2.8vw, 3rem)',
        custom_10: 'clamp(0.90rem, 1vw, 1.4rem)',
        custom_11: 'clamp(1rem, 1.6vw, 2rem)',
      },

      padding: {
        custom_container_header: 'clamp(1rem, 2.5vw, 3rem)',
        custom_1: 'clamp(0.60rem, 0.95vw, 1.4rem)',
        custom_2: 'clamp(5rem, 8vw, 12rem)',
        custom_3: 'clamp(4.5rem, 7.5vw, 12rem)',
      },

      spacing: {
        '16': '4rem',
      },

      gap: {
        custom_1: 'clamp(0.70rem, 1vw, 1.4rem)',
      },

      margin: {
        custom_1: 'clamp(1rem, 1.9vw, 2.5rem)',
        custom_2: 'clamp(10rem, 19.5vw, 24rem)',
        custom_3: 'clamp(5rem, 10vw, 14rem)',
        '15/100': '15%',
        '8/100': '8%',
      },

      width: {
        '20vw': '20vw',
        34: '134px',
        129: '34rem',
        '8.5/12': '70%',
        custom_1: 'clamp(3rem, 5vw, 6rem)',
        custom_2: 'clamp(3.5rem, 5vw, 6rem)',
        custom_3: 'clamp(12rem, 34vw, 40rem)',
        custom_4: 'clamp(70rem, 86vw, 86rem)',
        custom_5: 'clamp(12rem, 24vw, 30rem)',
      },

      height: {
        '85': '85vh',
        '90vh': '90vh',
        '150vh': '115vh',
        custom_1: 'clamp(47rem, 69vw, 74rem)',
        custom_2: 'clamp(40rem, 66vw, 70rem)',
        custom_3: 'clamp(3rem, 5vw, 6rem)',
        custom_4: 'clamp(3.5rem, 5vw, 6rem)',
        custom_5: 'clamp(40rem, 65vw, 95rem)',
        custom_6: 'clamp(30rem, 45vw, 50rem)',
      },

      screens: {
        sm_custom_1: '768px',
        md_custom_1: '832px',
        md_custom_2: '877px',
        md_middle: '850px',
      },

      translate: {
        '132': '32rem',
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
