import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant: "primary" | "secondary";
  additionalClass?: string;
}

export function Button({ variant, additionalClass, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex justify-center items-center gap-4 h-12 rounded-lg outline-none select-none transition-all",
        "text-white",
        { "bg-[#005EF3] hover:bg-[#004bc4] focus-within:bg-[#004bc4]": variant === "primary" },
        { "border border-white hover:bg-white/10 focus-within:bg-white/10": variant === "secondary" },
        additionalClass
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
