/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    //@material-tailwind/react
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
    colors: {
      primary: '#253859',
      primary_hover: '#141E30',
      secondary: 'rgba(var(rgba(211, 220, 230, 0.5)))',
      secondary_hover: '#313A46',
      green_variant: '#38A09C',
      crayola_maize: '#E9C46A',
      brow_sandy: '#F4A261',
      sienna_burnt: '#E76F51',
      info: '#366DC7',
      success: '#2AC769',
      error: '#FB4E4E',
      alert: '#F6A609',
      background: '#FAFBFE',
      hover_table: '#EFF2F7',
      gray_01: '#D3DCE6',
      gray_02: '#313A46'
    },
    screens: {
      'tablet': '1024px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1366px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1680px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
});
