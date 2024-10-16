/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#09090B',
        secondary: '#71717A',
        accent: ' #F26922',
        'btn-text': '#FAFAFA',
        headerText: '#A1A1AA',
      },
      backgroundColor: {
        'header-color': ' #E4E4E780',
        'accent-secondary': ' #4ADE80',
      },
      borderColor: {
        'border-bg': '#E4E4E7',
      },

      maxWidth: {
        headerWidth: '1290px',
        primaryConWidth: '1500px',
        secondaryConWidth: '770px',
      },
      letterSpacing: {
        '2p': '-2%',
      },
    },
  },
  plugins: [],
};

