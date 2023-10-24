import { memo } from "react";

import { Checkbox } from "@chakra-ui/react";

import CheckIcon from "./components/CheckIcon";

import { CustomCheckboxProps } from "./interfaces/CustomCheckbox.interface";

import { sizes } from "./utils/sizes.checkBox";

const CustomCheckbox = memo((props: CustomCheckboxProps) => {
  const { isChecked, size } = props;

  return (
    <Checkbox
      icon={<CheckIcon isChecked={isChecked} size={size} />}
      _hover={{ borderColor: "bgShadow", _dark: { borderColor: "gray.700" } }}
      sx={{
        ".chakra-checkbox__control": {
          borderRadius: "3px",
          width: sizes[size].width,
          height: sizes[size].height,
        },
      }}
      {...props}
    />
  );
});

export default CustomCheckbox;
