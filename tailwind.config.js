/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/*.{js,ts,jsx,tsx}", "./src/components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#999999",
        tan: "#ffe1c9",
      },
    },
  },
  plugins: [],
};

