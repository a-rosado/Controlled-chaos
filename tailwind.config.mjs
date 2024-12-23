/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#0D47F7"
      },
      fontFamily: {
        sans: ["Roboto", "Open Sans", "Lato", "sans-serif"],
      },
      screens: {
        xs: "480px",   // Extra small devices
        sm: "640px",   // Small devices
        md: "768px",   // Medium devices
        lg: "1024px",  // Large devices
        xl: "1280px",  // Extra-large devices
        "2xl": "1536px", // 2X-large devices
      },
    },
  },
  plugins: [],
};
