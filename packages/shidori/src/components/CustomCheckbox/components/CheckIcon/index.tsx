import { memo } from "react";

import { Icon } from "@chakra-ui/react";

import { IconCheck } from "../../../../../src/assets/customIcons";

import { CheckIconProps } from "../../interfaces/CheckIcon.interface";

const CheckIcon = memo(({ isChecked }: CheckIconProps) => {
  return (
    <Icon
      as={IconCheck}
      width="14px"
      height="14px"
      _dark={{ color: isChecked ? "" : "transparent" }}
    />
  );
});

export default CheckIcon;
