import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

/**
 * Radix Tooltip, wrapped to the panel look. Owns the popover shell only — what
 * goes inside is the caller's.
 *
 * Tooltip rather than HoverCard on purpose: the dependency is already here, and
 * it opens on keyboard focus as well as hover, which is the half of "on hover"
 * that gets forgotten. It is the wrong primitive the moment the content holds
 * anything interactive — a tooltip is described-by text, not a place to put a
 * link or a button. Reach for HoverCard then.
 *
 * Touch gets nothing: Radix does not open a tooltip on tap. That is why the
 * trigger must work on its own, with the tooltip as an extra.
 */
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      collisionPadding={12}
      className={cn(
        "panel z-50 max-w-sm p-3 shadow-pop duration-150 data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
