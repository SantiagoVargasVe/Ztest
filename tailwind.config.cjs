/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        woodrush: "#3F3E3A",
        gainsboro: "#DCDCDC",
        highlight: "#5C7BEB",
        philippine_gray: "#8B8B8B",
        zambezi: "#5F5F5F",
        pink_swan: "#B4B4B4",
        white_smoke: "#F5F5F5",
      },
      fontFamily: {
        helvetica: "Helvetica",
      },
      boxShadow: {
        custom: "0px 8px 16px rgba(29, 35, 58, 0.1);",
      },
    },
  },
  plugins: [],
};
