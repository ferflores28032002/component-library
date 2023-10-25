import { types, variants } from "../../constants/";

const backgroundColor = "transparent";
const color = "neWhite.500";

export const outline = {
  [variants.outline]: {
    [types.primary]: {
      backgroundColor,
      color: "#0085db",
      border: "1px solid rgba(0, 133, 219, 0.5);",
      _hover: { backgroundColor: "#0085db", color },
    },
    [types.secondary]: {
      backgroundColor,
      color: "#707482",
      border: "1px solid rgba(112, 122, 130, 0.5);",
      _hover: { backgroundColor: "#707482", color },
    },
    [types.success]: {
      backgroundColor,
      color: "#4bd08b",
      border: "1px solid rgba(75, 208, 139, 0.5)",
      _hover: { backgroundColor: "#4bd08b", color },
    },
    [types.warning]: {
      backgroundColor,
      color: "#f8c076",
      border: "1px solid rgba(248, 192, 118, 0.5)",
      _hover: { backgroundColor: "#f8c076", color },
    },
    [types.error]: {
      backgroundColor,
      color: "#fb977d",
      border: "1px solid rgba(251, 151, 125, 0.5)",
      _hover: { backgroundColor: "#fb977d", color },
    },
  },
};
