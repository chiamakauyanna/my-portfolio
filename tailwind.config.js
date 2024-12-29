/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: "#1b1f24",
                secondary: "#22282f",
                accent: "#13bbff",
                other: "#c3cad5",
                text: "#fff",
            },
            fontFamily: {
                inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
            },
        },
        plugins: [],
    },
};
