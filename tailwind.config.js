/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nutmeg: " hsl(14 45% 36%)",
        raspbery: "hsl(332 51% 32%)",
        "rose-white": "hsl(330 100% 98%)",
        eggshell: " hsl(30 54% 90%)",
        grey: "hsl(30 18% 87%)",
        "wenge-brown": "hsl(30 10% 34%)",
        charcoal: " hsl(24 5% 18%)",
      },
      fontFamily: {
        youngSerif: "Young Serif, serif",
        Outfit: "Outfit, sans-serif",
      },
    },
  },
  plugins: [],
};
