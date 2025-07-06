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
        primaryBrand: '#00ffff',
        secondaryAccent: '#8b5cf6',
        accentPink: '#ff0080',
        accentGreen: '#00ff88',
        darkBackground: '#0a0a0f',
        darkerBackground: '#05050a',
        textPrimary: '#ffffff',
        textSecondary: '#b0b0b0',
        cardBackground: 'rgba(255,255,255,0.05)',
        borderGlow: 'rgba(0,255,255,0.3)',
        link: '#00ffff',
        hover: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Rajdhani', 'Orbitron', 'sans-serif'],
        heading: ['Orbitron', 'monospace'],
      },
      fontSize: {
        h1: '4rem',
        h2: '3rem',
        h3: '1.5rem',
        h4: '1.3rem',
        sectionHeader: '1.1rem',
        body: '1.1rem',
        caption: '0.9rem',
      },
      fontWeight: {
        h1: '900',
        h2: '700',
        h3: '600',
        h4: '600',
        sectionHeader: 'bold',
      },
      lineHeight: {
        h1: '1.2',
        h2: '1.3',
        h3: '1.4',
        h4: '1.5',
        body: '1.6',
      },
      letterSpacing: {
        sectionHeader: '0.1em',
      },
      borderRadius: {
        DEFAULT: '20px',
        full: '50px',
        glass: '20px',
      },
      boxShadow: {
        card: '0 20px 40px rgba(0,255,255,0.2)',
        button: '0 0 30px rgba(0,255,255,0.4)',
        text: '0 0 20px #00ffff',
        glow: '0 0 20px #00ffff',
      },
      backgroundImage: {
        'cyberpunk-primary': 'linear-gradient(45deg, #0a0a0f, #05050a)',
        'cyberpunk-animated': 'radial-gradient(circle at 20% 80%, rgba(0,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255,0,128,0.1) 0%, transparent 50%)',
      },
      keyframes: {
        backgroundShift: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        textGlow: {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.2)' },
        },
        pulse: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: '0' },
        },
        fadeInUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
      },
      animation: {
        backgroundShift: 'backgroundShift 20s ease-in-out infinite',
        gridMove: 'gridMove 30s linear infinite',
        textGlow: 'textGlow 3s ease-in-out infinite alternate',
        pulse: 'pulse 2s infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        float: 'float 15s infinite linear',
      },
      spacing: {
        section: '6rem',
        small: '1rem',
        medium: '2rem',
        large: '3rem',
      },
      gap: {
        small: '1rem',
        medium: '2rem',
        large: '4rem',
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('pause-animation', '&:hover .animate-scroll');
    },
  ],
};