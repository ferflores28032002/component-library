import { types, variants } from "../../constants/";

const color = "neWhite.500";

export const solid = {
  [variants.solid]: {
    [types.primary]: {
      color,
      background: "#0085db",
    },
    [types.secondary]: {
      color,
      background: "#707a82",
    },
    [types.success]: {
      color,
      background: "#4bd08b",
    },
    [types.warning]: {
      color,
      background: "#f8c076",
    },
    [types.error]: {
      color,
      background: "#fb977d",
    },
  },
};
