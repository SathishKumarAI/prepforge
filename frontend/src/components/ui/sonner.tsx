import { Toaster as SonnerToaster, toast } from "sonner";

// Themed toast surface — pulls Catppuccin values via CSS variables so it
// matches light/dark automatically.
export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "rgb(var(--ctp-mantle))",
          color: "rgb(var(--ctp-text))",
          border: "1px solid rgb(var(--ctp-surface1))",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "13px",
        },
      }}
    />
  );
}

export { toast };
