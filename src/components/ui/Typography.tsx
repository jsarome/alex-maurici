import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small";
}

export const Typography = ({
  as,
  variant = "body",
  className,
  ...props
}: TypographyProps) => {
  const Component = as || (variant.startsWith("h") ? (variant as React.ElementType) : "p");

  const variants = {
    h1: "text-4xl md:text-6xl font-bold leading-tight",
    h2: "text-3xl md:text-5xl font-bold leading-tight",
    h3: "text-2xl md:text-4xl font-semibold",
    h4: "text-xl md:text-2xl font-semibold",
    body: "text-base md:text-lg text-muted leading-relaxed",
    small: "text-sm text-muted",
  };

  return <Component className={cn(variants[variant], className)} {...props} />;
};

export const SectionTitle = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={cn("mb-12", centered && "text-center")}>
    <Typography variant="h2" className="mb-4">
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body" className="max-w-2xl mx-auto">
        {subtitle}
      </Typography>
    )}
    <div className={cn("h-1 w-20 bg-primary mt-6", centered && "mx-auto")} />
  </div>
);
