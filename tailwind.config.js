/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryBrand': '#FF7F00',
        'secondaryAccent': '#4CAF50',
        'darkBackground': '#1A202C',
        'textDark': '#FFFFFF',
        'textLight': '#333333',
        'neutralBackground': '#F8F8F8',
        'borderPrimary': '#E0E0E0',
        'link': '#007BFF',
        'hover': '#FF9933',
        'pure-white': '#FFFFFF',
        'off-white': '#F8F8F8',
      },
    },
  },
  plugins: [],
};