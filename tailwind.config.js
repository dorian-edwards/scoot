/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundImage: {
      'home-mobile': 'url(/assets/images/home-hero-mobile.jpg)',
      'home-tablet': 'url(/assets/images/home-hero-tablet.jpg)',
      'home-desktop': 'url(/assets/images/home-hero-desktop.jpg)',
      'about-mobile': 'url(/assets/images/about-hero-mobile.jpg)',
      'about-tablet': 'url(/assets/images/about-hero-tablet.jpg)',
      'about-desktop': 'url(/assets/images/about-hero-desktop.jpg)',
    },
    colors: {
      white: '#FFF',
      'overlay-black': 'rgba(0,0,0,0.75)',
      transparent: 'rgba(0,0,0,0)',
      'menu-bg': '#333A44',
      yellow: '#FCB72B',
      'dark-navy': '#495567',
      'dim-grey': '#939CAA',
      'light-grey': '#E5ECF4',
      snow: '#F2F5F9',
      'light-yellow': '#FFF4DF',
    },
    extend: {},
    fontFamily: {
      lexend: ['Lexend Deca', 'sans-serif'],
      space: ['Space Mono', 'monospace'],
    },
    screens: {
      tablet: '700px',
      desktop: '1440px',
    },
  },
  plugins: [],
}
