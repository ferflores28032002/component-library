import { types, variants } from "../../constants/";

const color = "neWhite.500";

export const ghost = {
  [variants.ghost]: {
    [types.primary]: {
      backgroundColor: "rgb(229, 243, 251);",
      color: "#0085db",
      _hover: { backgroundColor: "#0085db", color },
    },
    [types.secondary]: {
      backgroundColor: "rgb(231, 236, 240);",
      color: "#707482",
      _hover: { backgroundColor: "#707482", color },
    },
    [types.success]: {
      backgroundColor: "rgb(223, 255, 243);",
      color: "#4bd08b",
      _hover: { backgroundColor: "#4bd08b", color },
    },
    [types.warning]: {
      backgroundColor: "rgb(255, 246, 234);",
      color: "#f8c076",
      _hover: { backgroundColor: "#f8c076", color },
    },
    [types.error]: {
      backgroundColor: "rgb(255, 237, 233)",
      color: "#fb977d",
      _hover: { backgroundColor: "#fb977d", color },
    },
  },
};
