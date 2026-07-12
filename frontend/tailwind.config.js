/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Catppuccin palette via CSS variables → theme-swappable (Mocha dark / Latte light).
        // Values live in src/styles/index.css :root / [data-theme].
        base: "rgb(var(--ctp-base) / <alpha-value>)",
        mantle: "rgb(var(--ctp-mantle) / <alpha-value>)",
        crust: "rgb(var(--ctp-crust) / <alpha-value>)",
        surface0: "rgb(var(--ctp-surface0) / <alpha-value>)",
        surface1: "rgb(var(--ctp-surface1) / <alpha-value>)",
        surface2: "rgb(var(--ctp-surface2) / <alpha-value>)",
        overlay0: "rgb(var(--ctp-overlay0) / <alpha-value>)",
        overlay1: "rgb(var(--ctp-overlay1) / <alpha-value>)",
        subtext0: "rgb(var(--ctp-subtext0) / <alpha-value>)",
        subtext1: "rgb(var(--ctp-subtext1) / <alpha-value>)",
        text: "rgb(var(--ctp-text) / <alpha-value>)",
        rosewater: "rgb(var(--ctp-rosewater) / <alpha-value>)",
        flamingo: "rgb(var(--ctp-flamingo) / <alpha-value>)",
        pink: "rgb(var(--ctp-pink) / <alpha-value>)",
        mauve: "rgb(var(--ctp-mauve) / <alpha-value>)",
        red: "rgb(var(--ctp-red) / <alpha-value>)",
        maroon: "rgb(var(--ctp-maroon) / <alpha-value>)",
        peach: "rgb(var(--ctp-peach) / <alpha-value>)",
        yellow: "rgb(var(--ctp-yellow) / <alpha-value>)",
        green: "rgb(var(--ctp-green) / <alpha-value>)",
        teal: "rgb(var(--ctp-teal) / <alpha-value>)",
        sky: "rgb(var(--ctp-sky) / <alpha-value>)",
        sapphire: "rgb(var(--ctp-sapphire) / <alpha-value>)",
        blue: "rgb(var(--ctp-blue) / <alpha-value>)",
        lavender: "rgb(var(--ctp-lavender) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Public Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(203,166,247,0.15), 0 8px 40px -12px rgba(203,166,247,0.35)",
        card: "0 1px 0 0 rgba(205,214,244,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grain": {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-2%,1%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
