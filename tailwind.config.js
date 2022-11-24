/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#35a0f2",

          secondary: "#9d62c1",

          accent: "#f271ed",

          neutral: "#261A2D",

          "base-100": "#FFFFFF",

          info: "#69ACCE",

          success: "#21A170",

          warning: "#A46F04",

          error: "#FA386F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
