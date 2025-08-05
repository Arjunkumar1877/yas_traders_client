import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefefe',
          100: '#fdfbf7',
          200: '#faf6ed',
          300: '#f5eed9',
          400: '#ede2c0',
          500: '#e4d4a3',
          600: '#d8c285',
          700: '#c9ad66',
          800: '#b8984a',
          900: '#9a7d3a',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#e4d5cf',
          300: '#d1bdb4',
          400: '#ba9f92',
          500: '#a08273',
          600: '#8b6b5c',
          700: '#74584b',
          800: '#5f473d',
          900: '#4d3a32',
        },
        golden: {
          50: '#fffbf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Custom colors matching the image exactly
        'cream-light': '#fefefe',
        'cream-off': '#fdfbf7',
        'brown-dark': '#5f473d',
        'brown-medium': '#8b6b5c',
        'golden-yellow': '#fbbf24',
        'golden-orange': '#f59e0b',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config; 