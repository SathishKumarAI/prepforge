import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Four tiers, deliberately few. Before this there were ~15 one-off buttons,
 * each with its own hue (`border-teal/40 bg-teal/10 text-teal`), which made
 * every action look equally important and none of them look primary.
 *
 * `primary` is a solid accent fill and there is at most ONE per page — it lives
 * in the act zone. Everything else is a neutral fill or a ghost. No gradients:
 * emphasis comes from weight and fill, not from a colour ramp.
 */
const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // text-on-accent, not text-crust: crust is the readable half of the
        // accent in three themes and fails AA in the other two. Not text-base
        // either — `base` is both a colour and a Tailwind font-size, so
        // `text-base` would emit a size rule too.
        primary: "bg-mauve text-on-accent hover:bg-mauve/90 active:bg-mauve/80",
        secondary: "bg-surface0 text-text hover:bg-surface1",
        ghost: "text-subtext0 hover:bg-surface0 hover:text-text",
        outline: "border border-surface1 text-subtext1 hover:bg-surface0 hover:text-text",
        danger: "text-red hover:bg-red/10",
      },
      size: {
        sm: "h-8 px-2.5 text-micro [&_svg]:size-3.5",
        default: "h-9 px-3.5 text-small [&_svg]:size-4",
        lg: "h-10 px-5 text-small [&_svg]:size-4",
        icon: "h-9 w-9 [&_svg]:size-4",
      },
    },
    defaultVariants: { variant: "secondary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
