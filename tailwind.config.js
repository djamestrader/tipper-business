/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Trashly Inspired Design System Colors
        primaryBrand: '#FF7F00', // Primary Brand Orange
        secondaryAccent: '#4CAF50', // Secondary Accent Green
        darkBackground: '#1A202C', // Dark Background
        textDark: '#FFFFFF', // Text Dark (White)
        textLight: '#333333', // Text Light (Dark Gray)
        textMedium: '#666666', // Medium gray for better contrast on light backgrounds
        neutralBackground: '#F8F8F8', // Neutral background from design system
        cardBackground: '#FFFFFF', // Card background color
        borderPrimary: '#E0E0E0', // Border color from design system
        link: '#007BFF', // Link color from design system
        hover: '#FF9933', // Hover Orange
        pureWhite: '#FFFFFF', // Pure white
        offWhite: '#F8F8F8', // Off-white
        gray: {
          100: '#F7F7F7',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': '3rem',
        'h2': '2.5rem',
        'h3': '2rem',
        'h4': '1.5rem',
        'section-header': '0.9rem',
        'body': '1rem',
        'caption': '0.8rem',
      },
      fontWeight: {
        'h1': '700',
        'h2': '700',
        'h3': '600',
        'h4': '600',
        'section-header': 'bold',
      },
      lineHeight: {
        'h1': '1.2',
        'h2': '1.3',
        'h3': '1.4',
        'h4': '1.5',
        'body': '1.6',
      },
      letterSpacing: {
        'section-header': '0.1em',
        'button': '0.05em',
      },
      textTransform: {
        'uppercase': 'uppercase',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.2)',
        'focus': '0 0 0 2px rgba(255, 127, 0, 0.2)',
      },
      borderRadius: {
        'standard': '8px',
        'button': '4px',
      },
      padding: {
        'section': '60px 0',
        'button': '12px 24px',
        'small': '8px',
        'medium': '16px',
        'large': '24px',
      },
      margin: {
        'small': '8px',
        'medium': '16px',
        'large': '24px',
      },
      gap: {
        'small': '16px',
        'medium': '24px',
        'large': '32px',
      },
      transitionProperty: {
        'button': 'all',
      },
      transitionDuration: {
        'button': '300ms',
      },
      transitionTimingFunction: {
        'button': 'ease',
      },
      borderWidth: {
        'DEFAULT': '1px',
      },
    },
  },
  plugins: [],
};