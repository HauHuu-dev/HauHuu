/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("tw-animate-css"),
    ],
}