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
      "dark-grayish-blue": "hsl(217, 19%, 35%)",
      "dark-blackish-blue": "hsl(219, 29%, 14%)",
      "neutral-1": "#ffffff",
      "neutral-2": "hsl(0, 0%, 81%)",
      "neutral-3": "hsl(210, 46%, 95%)",
      "neutral-4": "hsl(217, 19%, 35%)",
      "neutral-5": "hsl(219, 29%, 14%)",
      violet: "hsl(263, 55%, 52%)",
      "clipboard-cyan": "hsl(171, 66%, 44%)",
      "clipboard-light-blue": "hsl(233, 100%, 69%)",
      "clipboard-dark-grayish-blue": "hsl(210, 10%, 33%)",
      "clipboard-grayish-blue": "hsl(201, 11%, 66%)",
    },
    screens: {
      xxs: "480px",
      xs: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        quotation: "url(/testimonials-grid/quotation.svg)",
      },
      minWidth: {
        8: "32px",
      },
      fontSize: {
        xxs: "10px",
      },
    },
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
  },
  plugins: [],
};
