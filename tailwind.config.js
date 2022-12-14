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
      'careers-location-mobile':
        'url(/assets/images/careers-location-hero-mobile.jpg)',
      'careers-location-tablet':
        'url(/assets/images/careers-location-hero-tablet.jpg)',
      'careers-location-desktop':
        'url(/assets/images/careers-location-hero-desktop.jpg)',
      'world-mobile': 'url(/assets/images/world-map-mobile.png)',
      'world-tablet': 'url(/assets/images/world-map-tablet.png)',
      'world-desktop': 'url(/assets/images/world-map-desktop.png)',
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
      tablet: '768px',
      desktop: '1440px',
    },
  },
  plugins: [],
}
