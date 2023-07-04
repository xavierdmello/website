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
      },
    },
  },
  plugins: [],
};

