module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-image": "url(/stats-card/image-header-desktop.jpg)",
      },
      colors: {
        "primary-soft-blue": "#8bacda",
        "primary-cyan": "#00fff7",
        "neutral-main-dark-blue": "#0d192b",
        "neutral-card-dark-blue": "#14253d",
        "neutral-line-dark-blue": "#2f415b",
        white: "#ffffff",
        "main-bg": "hsl(233, 47%, 7%)",
        "card-bg": "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-white-main": "hsla(0, 0%, 100%, 0.75)",
        "neutral-white-stat": "hsl(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      minWidth: {
        "1/2": "50%",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
    colors: {},
  },
  plugins: [],
};
