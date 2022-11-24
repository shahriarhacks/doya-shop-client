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
          primary: "#aee57b",

          secondary: "#c244d6",

          accent: "#8385db",

          neutral: "#2C252D",

          "base-100": "#EEE6EF",

          info: "#6990D8",

          success: "#116A34",

          warning: "#F5C461",

          error: "#FB1804",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
