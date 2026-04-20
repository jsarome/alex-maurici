"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
    secondary: "bg-secondary text-foreground hover:bg-gray-200",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-foreground hover:bg-secondary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-brand transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:scale-[1.02]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
