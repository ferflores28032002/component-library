import { types, variants } from "../../constants/";

const color = "neWhite.500";

export const solid = {
  [variants.solid]: {
    [types.primary]: {
      color,
      background: "#0085db",
      _hover: {},
    },
    [types.secondary]: {
      color,
      background: "#707a82",

      _hover: {},
    },
    [types.success]: {
      color,
      background: "#4bd08b",
      _hover: {},
    },
    [types.warning]: {
      color,
      background: "#f8c076",
      _hover: {},
    },
    [types.error]: {
      color,
      background: "#fb977d",
    },
  },
};
