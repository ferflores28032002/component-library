import { Fragment } from "react";
import { Button as ButtonChakraUi, Icon } from "@chakra-ui/react";

import { IconAudio } from "../../../src/assets/customIcons";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Fragment>
      <ButtonChakraUi colorScheme="blue" variant="solid">
        {props.label}
      </ButtonChakraUi>

      <Icon as={IconAudio} width="24px" height="24px" color="neAccent.500" />
    </Fragment>
  );
};

export default Button;
