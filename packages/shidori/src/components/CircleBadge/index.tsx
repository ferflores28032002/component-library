import { memo } from "react";

import { Flex, Icon } from "@chakra-ui/react";

import { CircleBadgeProps } from "./interfaces/CircleBadge.interface";

import { CircleBadgeTypes, CircleBadgeSizes } from "./types";

const CircleBadge = memo(
  ({
    type,
    darkBackground,
    darkColor,
    lightBackground,
    lightColor,
    CircleBadgeSize,
  }: CircleBadgeProps) => {
    const selectedBadge = CircleBadgeTypes.find((icon) => icon.type === type);

    const selectedBadgeSize = CircleBadgeSizes.find(
      (size) => size.size === CircleBadgeSize
    );

    const _bgLight = lightBackground ?? selectedBadge?.bg;
    const _bgDark = darkBackground ?? selectedBadge?.bg;
    const _colorLight = lightColor || "white";
    const _colorDark = darkColor || "white";

    return (
      <Flex
        width={selectedBadgeSize?.width}
        height={selectedBadgeSize?.height}
        rounded="full"
        bg={_bgLight}
        justifyContent="center"
        alignItems="center"
        _dark={{ bg: _bgDark }}
      >
        <Icon
          as={selectedBadge?.icon}
          fontSize={selectedBadgeSize?.iconSize}
          color={_colorLight}
          _dark={{ color: _colorDark }}
        />
      </Flex>
    );
  }
);

export default CircleBadge;
