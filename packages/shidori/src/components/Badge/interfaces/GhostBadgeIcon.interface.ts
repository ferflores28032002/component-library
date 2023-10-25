import { types } from "../../../../src/shared/icons/interfaces/types";

export interface GhostBadgeIconProps {
  label: string;
  types: type;
  typeIcon: types;
}

export type type = "primary" | "secondary" | "success" | "warning" | "error";
