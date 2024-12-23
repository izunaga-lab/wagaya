import type { Config } from 'tailwindcss'

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        notoSansJP: 'var(--font-noto-sans-jp)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
} satisfies Config
