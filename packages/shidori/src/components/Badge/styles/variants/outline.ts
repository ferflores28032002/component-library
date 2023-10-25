import { types, variants } from "../../constants/";

const color = "neWhite.500";

export const outline = {
  [variants.outline]: {
    [types.primary]: {
      backgroundColor: "rgb(229, 243, 251);",
      color: "#0085db",
      border: "1px solid rgba(0, 133, 219, 0.5);",
    },
    [types.secondary]: {
      backgroundColor: "rgb(231, 236, 240);",
      color: "#707482",
      border: "1px solid rgba(112, 122, 130, 0.5);",
    },
    [types.success]: {
      backgroundColor: "rgb(223, 255, 243);",
      color: "#4bd08b",
      border: "1px solid rgba(75, 208, 139, 0.5)",
    },
    [types.warning]: {
      backgroundColor: "rgb(255, 246, 234);",
      color: "#f8c076",
      border: "1px solid rgba(248, 192, 118, 0.5)",
    },
    [types.error]: {
      backgroundColor: "rgb(255, 237, 233)",
      color: "#fb977d",
      border: "1px solid rgba(251, 151, 125, 0.5)",
    },
  },
};
