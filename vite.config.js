import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import forms from '@tailwindcss/forms'
import flowbiteReact from "flowbite-react/plugin/vite";
 

// https://vite.dev/config/
export default defineConfig({
  plugins: [// Pass your config object directly:
  react(), tailwindcss({
    config: {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#D4A056",
            "background-light": "#f6f7f8",
            "background-dark": "#1A1A1A",
            "card-dark": "#242424"
          },
          fontFamily: {
            "display": ["Work Sans", "sans-serif"],
            "serif": ["Playfair Display", "serif"],
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
        },
      },
      plugins: [
        forms,
      ],
    }
  }), flowbiteReact()],
})