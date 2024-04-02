module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 50: "#ebedf0", 100: "#ced4da" },
        black: { 900: "#08090a", "900_01": "#000000" },
        white: { A700: "#ffffff" },
        deep_purple: { 100: "#ccc1da", 400: "#8064a2" },
        gray: {
          50: "#f7fdff",
          100: "#f7f5f9",
          500: "#939ba3",
          600: "#6c747a",
          "500_01": "#939ba3",
          "50_01": "#f8f9fa",
        },
        light_blue: { 700: "#0096c8" },
      },
      boxShadow: { xs: "0px 2px  12px 0px #00000014", sm: "0px 8px  12px 0px #939ba31e" },
      fontFamily: { poppins: "Poppins" },
      textShadow: { ts: "0px 0px  5px #78787823" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
