/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "10xl": "10rem",
            },
            spacing: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
                176: "44rem",
                224: "56rem",
                256: "64rem",
                400: "100rem",
            },
            colors: {
                "wh-0": "#FFFFFF",
                "wh-10": "#F4F4F4",
                "wh-50": "#FBFBFB",
                "wh-75": "#F7F7F7",
                "wh-100": "#C9C9C9",
                "wh-300": "#939393",
                "wh-500": "#595959",
                "wh-900": "#0F0F0F",
                "accent-red": "#EA9648",
                "accent-orange": "#E87500",
                "officer-orange": "#EE9740",
                "accent-green": "#2D8B49",
                "accent-yellow": "#EDCA2C",
                "or-10": "#ff841c",
                "secondary-blue": "#498E94",
                "secondary-red": "#E20000",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }: { addComponents: Function }) {
            addComponents({
                ".navbarLink": {
                    color: "#498E94",
                    opacity: 100,
                    "&:hover": {
                        color: "#E20000",
                        underline: true,
                        opacity: 1,
                    },
                },
            });
        }),
        require("@tailwindcss/typography"),
    ],
};
