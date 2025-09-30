import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      //   fontFamily: {
      //     sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
      //     title: ["Kanit", ...defaultTheme.fontFamily.sans],
      //     stock: [
      //       "ui-sans-serif",
      //       "system-ui",
      //       "sans-serif",
      //       "Apple Color Emoji",
      //       "Segoe UI Emoji",
      //       "Segoe UI Symbol",
      //       "Noto Color Emoji",
      //     ],
      //   },
      colors: {
        muted: {
          50: "#ffffff", // base (white)
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        primary: {
          50: "#f0f8ff",
          100: "#dff1ff",
          200: "#b9e4fe",
          300: "#7bcffe",
          400: "#34b7fc",
          500: "#0a9fed",
          600: "#007ecb",
          700: "#0067a9", // primary
          800: "#055587",
          900: "#0a4670",
          950: "#072d4a",
        },
        accent: {
          50: "#fffaea",
          100: "#fff0c5",
          200: "#ffe087",
          300: "#ffca48",
          400: "#ffb31e",
          500: "#fc8f04",
          600: "#e06900", // accent
          700: "#b94604",
          800: "#96360a",
          900: "#7b2d0c",
          950: "#471401",
        },
      },
      // minHeight: {
      //   "1/2": "50vh",
      //   "2/3": "66vh",
      //   "3/4": "75vh",
      // },
      // height: {
      //   "1/2": "50vh",
      //   "3/4": "75vh",
      // },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        "fade-from-left": {
          "0%": { opacity: 0, transform: "translateX(-15px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-from-right": {
          "0%": { opacity: 0, transform: "translateX(15px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-from-top": {
          "0%": { opacity: 0, transform: "translateY(-15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-from-bottom": {
          "0%": { opacity: 0, transform: "translateY(15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-left": "fade-from-left 0.9s ease-out",
        "fade-right": "fade-from-right 0.9s ease-out",
        "fade-top": "fade-from-top 0.9s ease-out",
        "fade-bottom": "fade-from-bottom 0.9s ease-out",
        "slow-zoom": "zoom 45s alternate infinite ease-in-out",
        "mid-zoom": "zoom 18s alternate infinite ease-in-out",
      },
    },
  },
  //   plugins: [
  //     require("@tailwindcss/typography"),
  //     // Inject @font-face with font-display swap for LCP optimization
  //     function ({ addBase }) {
  //       addBase({
  //         "@font-face": {
  //           fontFamily: "Kanit",
  //           fontWeight: "400",
  //           fontStyle: "normal",
  //           fontDisplay: "swap",
  //           src: 'url("/_astro/kanit-lat….C1Jk-JCr.woff2") format("woff2")',
  //         },
  //         "@font-face": {
  //           fontFamily: "Open Sans Variable",
  //           fontWeight: "400",
  //           fontStyle: "normal",
  //           fontDisplay: "swap",
  //           src: 'url("/_astro/open-sans….CYuRH5ug.woff2") format("woff2")',
  //         },
  //       });
  //     },
  //   ],
};
