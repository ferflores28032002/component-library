import { Flex, Icon } from "@chakra-ui/react";

import { GhostBadgeIconProps } from "../../interfaces/GhostBadgeIcon.interface";

import { getBadgeStyle } from "../../styles/getBadgeStyle";

import { useTypeIcon } from "../../../../../src/hooks/useTypeIcon";

const GhostBadgeIcon = ({ label, types, typeIcon }: GhostBadgeIconProps) => {
  const styles = getBadgeStyle(types, "ghost");

  const [icon] = useTypeIcon(typeIcon);

  return (
    <Flex
      alignItems="center"
      borderRadius="16px"
      fontSize="0.75rem"
      fontWeight="500"
      height="32px"
      justifyContent="center"
      letterSpacing="0.4px"
      padding="0px 12px"
      gap="1"
      {...styles}
    >
      <Icon as={icon} fontSize="16px" />
      <span style={{ marginBottom: "-1px" }}> {label}</span>
    </Flex>
  );
};

export default GhostBadgeIcon;
