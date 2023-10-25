import { ButtonProps } from "@chakra-ui/react";

export interface ButtonProp extends ButtonProps {
  label: string;
  variants: variants;
  types: type;
  size: size;
}

export type type = "primary" | "secondary" | "success" | "warning" | "error";
export type variants = "solid" | "outline" | "ghost";
export type size = "sm" | "md";
