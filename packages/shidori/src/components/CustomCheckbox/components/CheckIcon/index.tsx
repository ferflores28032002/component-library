import { memo } from "react";

import { Icon } from "@chakra-ui/react";

import { IconCheck } from "../../../../../src/assets/customIcons";

import { sizesIconCheckbox } from "../../utils/sizes.checkBox";

import { CheckIconProps } from "../../interfaces/CheckIcon.interface";

const CheckIcon = memo(({ isChecked, size }: CheckIconProps) => {
  return (
    <Icon
      as={IconCheck}
      width={sizesIconCheckbox[size].width}
      height={sizesIconCheckbox[size].height}
      _dark={{ color: isChecked ? "" : "transparent" }}
    />
  );
});

export default CheckIcon;
