import { memo } from "react";

import Ink from "react-ink";

import { Button as CustomButton } from "@chakra-ui/react";

import { getButtonStyle } from "./styles/getButtonStyle";

import { _activeShadow, _hoverShadow, transition } from "./animation/shadow";

import { ButtonProp } from "./interfaces/Button.interface";

const Button = memo(({ label, types, variants, size, ...rest }: ButtonProp) => {
  const styles = getButtonStyle(types, variants);

  const padding = size === "sm" ? "4px 10px" : "6px 16px";
  const fontSize = size === "sm" ? "0.8125rem" : "0.875rem";

  return (
    <CustomButton
      borderRadius="25px"
      fontSize={fontSize}
      fontWeight="400"
      lineHeight="1.75px"
      minWidth="65px"
      verticalAlign="middle"
      padding={padding}
      textAlign="center"
      _hover={{
        ...styles._hover,
        boxShadow: _hoverShadow,
      }}
      _active={{
        boxShadow: _activeShadow,
      }}
      transition={transition}
      {...styles}
      {...rest}
    >
      <Ink />
      <span style={{ marginBottom: "-1px" }}> {label}</span>
    </CustomButton>
  );
});

export default Button;
