/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      phone: "320px",
      tablet: "540px",
      medium: "1024px",
      large: "1400px",
      larger: "1600px",
      xlarge: "2240px",
    },
    extend: {},
  },
  plugins: [],
};
