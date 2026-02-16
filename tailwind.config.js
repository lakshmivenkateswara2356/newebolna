/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sea: {
          deep: "#0B3C49",
          primary: "#0F6E8C",
          light: "#38B6C1",
          foam: "#D9F3F4",
          dark: "#062F3C",
        },
      },
    },
  },
  plugins: [],
};
