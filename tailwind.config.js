/**
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-06 14:40:43
 * @LastEditors  : chen ming
 * @LastEditTime : 2021-06-20 22:06:33
 * @FilePath     : /vue3-1/tailwind.config.js
 */
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  important: true,
  purge: [
    "./public/**/*.html",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        teal: colors.teal,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
      },
      content: {}, // 伪类的 content
      animation: {
        flashing: "flashing 7s infinite",
      },
      keyframes: {
        flashing: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('~@/assets/images/sunnies.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
