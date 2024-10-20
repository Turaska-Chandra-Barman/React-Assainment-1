/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        smpro:'520px'
      },

      colors: {
        primary: '#09090B',
        secondary: '#71717A',
        accent: ' #F26922',
        'btn-text': '#FAFAFA',
        headerText: '#A1A1AA',
      },
      backgroundColor: {
        'header-color': ' #E4E4E780',
        'header-secondary':'#F2F2F3',
        'accent-secondary': ' #4ADE80',
        'chat-bg': ' #3F3F46',
        'mainChat-bg': '#F4F4F5',
        'border-bg': '#E4E4E7',
        'line-accent': '#FB923C',
        'bg-incident': '#FAFAF5',
      },
      borderColor: {
        'border-bg': '#E4E4E7',
      },

      maxWidth: {
        headerWidth: '1290px',
        primaryConWidth: '1320px',
        secondaryConWidth: '770px',
      },
      letterSpacing: {
        '2p': '-2%',
      },
      fontFamily: {
        'chat-font': ['Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        chatbtn: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      backgroundImage: {
        navGradient: 'linear-gradient(to top, #2e337a, #09090a)',
      },
    },
  },
  plugins: [],
};

