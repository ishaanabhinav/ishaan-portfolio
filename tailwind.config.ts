import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Cal Sans"', 'Inter Variable', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        brand: {
          50: '#fff8eb',
          100: '#ffeac7',
          200: '#ffd28a',
          300: '#ffb14d',
          400: '#ff9224',
          500: '#f9730b',
          600: '#dd5306',
          700: '#b73b09',
          800: '#942f0e',
          900: '#7a290f',
          950: '#461303',
        },
        accent: {
          50: '#fff1f4',
          100: '#ffe4ea',
          200: '#ffcdd6',
          300: '#ffa1b3',
          400: '#ff6a89',
          500: '#fb3563',
          600: '#e8174c',
          700: '#c40d40',
          800: '#a30e3d',
          900: '#871039',
          950: '#4b031a',
        },
        ink: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b7b7c0',
          400: '#8e8e9b',
          500: '#71717f',
          600: '#5b5b67',
          700: '#4a4a55',
          800: '#3f3f48',
          900: '#27272d',
          950: '#0d0d10',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-aurora':
          'radial-gradient(at 20% 20%, rgba(255, 145, 36, 0.18) 0px, transparent 50%), radial-gradient(at 80% 30%, rgba(251, 53, 99, 0.18) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(255, 178, 77, 0.12) 0px, transparent 50%)',
        'gradient-brand':
          'linear-gradient(135deg, #ff9224 0%, #fb3563 50%, #e8174c 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(251, 53, 99, 0.5)',
        soft: '0 8px 30px -12px rgba(15, 15, 15, 0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;
