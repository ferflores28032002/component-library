import { Flex } from "@chakra-ui/react";

import { BadgeProps } from "./interfaces/Badgeinterface";

import { getBadgeStyle } from "./styles/getBadgeStyle";

const Badge = ({ label, types, variants, rounded }: BadgeProps) => {
  const styles = getBadgeStyle(types, variants);

  const borderRaddius = rounded === "sm" ? "8px" : "16px";

  return (
    <Flex
      alignItems="center"
      borderRadius={borderRaddius}
      fontSize="0.75rem"
      fontWeight="500"
      height="24px"
      justifyContent="center"
      letterSpacing="0.4px"
      padding="0px 12px"
      {...styles}
    >
      {label}
    </Flex>
  );
};

export default Badge;
