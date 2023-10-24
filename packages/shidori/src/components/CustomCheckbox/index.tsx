import { memo } from "react";

import { Checkbox } from "@chakra-ui/react";

import CheckIcon from "./components/CheckIcon";

import { CustomCheckboxProps } from "./interfaces/CustomCheckbox.interface";

const CustomCheckbox = memo((props: CustomCheckboxProps) => {
  return (
    <Checkbox
      icon={<CheckIcon isChecked={props.isChecked} />}
      _hover={{ borderColor: "bgShadow", _dark: { borderColor: "gray.700" } }}
      {...props}
    />
  );
});

export default CustomCheckbox;
