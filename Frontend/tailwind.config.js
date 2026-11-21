/** @type {import('tailwindcss').Config} */
export default {
  // v4 loads this file only because src/index.css has a matching @config directive.
  darkMode: "class",
  // Optional in v4: source detection is automatic. Kept for editor/tooling hints.
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#aa3bff",
          dark: "#c084fc",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
