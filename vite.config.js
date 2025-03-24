import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        primary: "#ffce1a",
        secondary: "#0d0842",
        bgColor: "#ffffff",
        favorite: "#ff5841",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
      },
    },
  },
});
