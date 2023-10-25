import { types } from "src/shared/icons/interfaces/types";
import { IconsTypes } from "../../src/shared/icons/contentTypes/icons";

export const useTypeIcon = (type: types) => {
  const icon = IconsTypes.find((icon) => icon.type === type);

  return [icon?.icon, type];
};
