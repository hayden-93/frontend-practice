module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "primary-soft-blue": "#8bacda",
      "primary-cyan": "#00fff7",
      "neutral-main-dark-blue": "#0d192b",
      "neutral-card-dark-blue": "#14253d",
      "neutral-line-dark-blue": "#2f415b",
      "neutral-light-gray": "hsl(0, 0%, 81%)",
      "neutral-light-grayish-blue": "hsl(210, 46%, 95%)",
      white: "#ffffff",
      violet: "hsl(263, 55%, 52%)",
      "dark-grayish-blue": "hsl(217, 19%, 35%)",
      "dark-blackish-blue": "hsl(219, 29%, 14%)",
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
