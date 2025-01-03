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
                textColor: "#fff",
            },
            fontFamily: {
                inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
            },
            fontSize: {
                h1: '4rem', 
                'h1-md': '3.5rem',
                'h1-sm': '3rem',
                h2: '2.5rem', 
                'h2-md': '2.3rem',
                'h2-sm': '2rem', 
                h4: '1.6rem',
                'h4-md': '1.4rem',
                'h4-sm': '1.3rem',
                p: '1rem', 
              },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
