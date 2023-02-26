/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                purple:"var(--purple)",
                "purple-dark": "var(--purple-dark)",
                blue: "var(--blue)",
                "blue-dark": ({ opacityValue }) => {
                  if (opacityValue) {
                      return `rgba(var(--blue-dark),${opacityValue})`;
                  }
                  return "var(--blue-dark)";
              },
                "gray-100": "var(--gray-100)",
                "gray-200": "var(--gray-200)",
                "gray-300": "var(--gray-300)",
                "gray-400": "var(--gray-400)",
                "gray-500": "var(--gray-500)",
                "gray-600": "var(--gray-600)",
                "gray-700": "var(--gray-700)",
                danger: "var(--danger)",
            },
            screens: {
                'xs': '421px',
              },
        },
    },
    plugins: [],
};
