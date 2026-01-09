/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ["Allura", "cursive"],
      },
      colors: {
        brand: {
          violet: "#7C3AED", // matches your violet-600 usage
        },
      },
    },
  },
  plugins: [],
};
