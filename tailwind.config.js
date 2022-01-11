module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryCyan: "var(--primary-cyan)",
        primaryDarkViolet: "var(--primary-dark-violet)",
        secondaryRed: "var(--secondary-red)",
        neutralGray: "var(--neutral-gray)",
        neutralGrayViolet: "var(--neutral-gray-violet)",
        neutralVeryDarkBlue: "var(--neutral-very-dark-blue)",
        neutralVeryDarkViolet: "var(--neutral-very-dark-violet)",
      },
    },
  },
  plugins: [],
};
