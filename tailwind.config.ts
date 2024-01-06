import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'DEFAULT': 'var(--border-radius)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#6c69bb',
          '50': '#f2f4fb',
    '100': '#e8ebf7',
    '200': '#d5dbf0',
    '300': '#bbc3e6',
    '400': '#9fa5da',
    '500': '#8789cd',
    '600': '#6c69bb',
    '700': '#615da5',
    '800': '#4f4d86',
    '900': '#43436c',
    '950': '#29273f',



        },
        secondary: {
          DEFAULT: '#F2F2F2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F2F2F2',
          600: '#D9D9D9',
          700: '#BFBFBF',
          800: '#A6A6A6',
          900: '#8C8C8C',
        },
        accent: {
          DEFAULT: '#F2F2F2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F2F2F2',
          600: '#D9D9D9',
          700: '#BFBFBF',
          800: '#A6A6A6',
          900: '#8C8C8C',
        },
        success: {
          DEFAULT: '#4CAF50',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        warning: {
          DEFAULT: '#FFC107',
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
      },

      

      maxWidth: {
        'content-width': 'var(--content-width)',
      },

      height: {
        'navbar-height': 'var(--navbar-height)',
      }
    },
  },
  plugins: [],
}
export default config
