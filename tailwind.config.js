/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#292f36",
        secondary: "#1a1e23",
        accent: "#12f7d6",
        other: "#c3cad5",
        textColor: "#fff",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      fontSize: {
        h1: "4rem",
        "h1-md": "3.5rem",
        "h1-sm": "3rem",
        h2: "2rem",
        "h2-md": "1.6rem",
        "h2-sm": "1.4rem",
        h4: "1rem",
        "h4-md": "0.8rem",
        "h4-sm": "0.6rem",
        p: "0.8rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
