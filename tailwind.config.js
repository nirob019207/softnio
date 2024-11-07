/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        Bebas: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        primary: "#B52B1D",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      container: {
        center: true, // Center the container
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          xs: "100%",
          ss: "620px",
          sm: "768px",
          md: "1060px",
          lg: "1200px",
          xl: "1320px", // Define custom width for extra large screens
        },
      },
    },
  },
  plugins: [],
}
