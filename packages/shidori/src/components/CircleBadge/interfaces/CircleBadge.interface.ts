import { TypeIconCircleBadge } from "../types";

export interface CircleBadgeProps {
  type: TypeIconCircleBadge;
  darkBackground?: string;
  darkColor?: string;
  lightBackground?: string;
  lightColor?: string;
  CircleBadgeSize: CircleBadgeSize;
}

export type CircleBadgeSize = "sm" | "md" | "lg" | "xl" | "2xl";
