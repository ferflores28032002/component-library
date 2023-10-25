export interface BadgeProps {
  label: string;
  variants: variants;
  types: type;
  rounded: rounded;
}

export type type = "primary" | "secondary" | "success" | "warning" | "error";
export type variants = "solid" | "outline" | "ghost";
export type rounded = "sm" | "md";
