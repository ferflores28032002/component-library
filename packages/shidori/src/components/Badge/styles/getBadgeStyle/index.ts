import { type, variants } from "../../interfaces/Badgeinterface";
import { ghost } from "../variants/ghost";
import { outline } from "../variants/outline";
import { solid } from "../variants/solid";

const styles = {
  ...solid,
  ...outline,
  ...ghost,
};

export const getBadgeStyle = (type: type, variant: variants) => {
  if (styles[variant] && styles[variant][type]) return styles[variant][type];

  return styles["solid"]["primary"];
};
