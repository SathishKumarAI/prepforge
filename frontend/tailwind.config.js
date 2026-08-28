import tailwindcssAnimate from "tailwindcss-animate";

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
        // shadcn/ui semantic tokens → mapped onto the Catppuccin palette
        background: "rgb(var(--ctp-base) / <alpha-value>)",
        foreground: "rgb(var(--ctp-text) / <alpha-value>)",
        card: "rgb(var(--ctp-mantle) / <alpha-value>)",
        "card-foreground": "rgb(var(--ctp-text) / <alpha-value>)",
        popover: "rgb(var(--ctp-mantle) / <alpha-value>)",
        "popover-foreground": "rgb(var(--ctp-text) / <alpha-value>)",
        primary: "rgb(var(--ctp-mauve) / <alpha-value>)",
        "primary-foreground": "rgb(var(--ctp-crust) / <alpha-value>)",
        secondary: "rgb(var(--ctp-surface0) / <alpha-value>)",
        "secondary-foreground": "rgb(var(--ctp-text) / <alpha-value>)",
        muted: "rgb(var(--ctp-surface0) / <alpha-value>)",
        "muted-foreground": "rgb(var(--ctp-overlay1) / <alpha-value>)",
        accent: "rgb(var(--ctp-surface1) / <alpha-value>)",
        "accent-foreground": "rgb(var(--ctp-text) / <alpha-value>)",
        destructive: "rgb(var(--ctp-red) / <alpha-value>)",
        "destructive-foreground": "rgb(var(--ctp-crust) / <alpha-value>)",
        // semantic status palette — use these instead of reaching for raw accent colors
        success: "rgb(var(--ctp-green) / <alpha-value>)",
        "success-foreground": "rgb(var(--ctp-crust) / <alpha-value>)",
        warning: "rgb(var(--ctp-yellow) / <alpha-value>)",
        "warning-foreground": "rgb(var(--ctp-crust) / <alpha-value>)",
        info: "rgb(var(--ctp-blue) / <alpha-value>)",
        "info-foreground": "rgb(var(--ctp-crust) / <alpha-value>)",
        border: "rgb(var(--ctp-surface1) / <alpha-value>)",
        input: "rgb(var(--ctp-surface1) / <alpha-value>)",
        ring: "rgb(var(--ctp-mauve) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Public Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      // One type scale, used everywhere. Fixed rem steps at a ~1.18 ratio, not
      // clamp(): product UI is viewed at a consistent DPI, and a heading that
      // shrinks when the sidebar opens looks broken rather than responsive.
      fontSize: {
        display: ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.018em" }],
        h1: ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.016em" }],
        h2: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.012em" }],
        h3: ["1.0625rem", { lineHeight: "1.4", letterSpacing: "-0.006em" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
      },
      // Two levels, both with a real offset and blur. A zero-offset coloured
      // halo is decoration, not depth — the old `glow` was exactly that.
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.16)",
        pop: "0 8px 24px -8px rgb(0 0 0 / 0.32), 0 2px 6px -2px rgb(0 0 0 / 0.2)",
        glow: "0 1px 2px 0 rgb(0 0 0 / 0.16)", // deprecated alias, being swept
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
