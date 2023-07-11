/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/*.{js,ts,jsx,tsx}", "./src/components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#999999",
        background: "#f5f5f5",
        primary: "#ffe1c9",
        linkedin: "#0077b5",
        telegram: "#2AABEE",
        github: "#333333",
        instagram: "#E1306C",
        twitter: "#1DA1F2",
      },
      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
};

