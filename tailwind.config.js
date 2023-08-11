/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        periwinkle: "#C0B7E8",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "white-aluminium": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        "loader-bounce": {
          to: {
            opacity: "0.1",
            transform: "translate3d(0, -1rem, 0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
