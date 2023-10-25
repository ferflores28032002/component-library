import type { Meta, StoryObj } from "@storybook/react";

import GhostBadgeIcon from "../../components/Badge/components/GhostBadgeIcon";

import { contentTypes } from "../../../src/shared/icons/contentTypes/icons";

import { types } from "../../components/Badge/constants";

const meta = {
  title: "Badges/Badge",
  component: GhostBadgeIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    types: {
      options: types,
      control: { type: "select" },
    },
    typeIcon: {
      options: contentTypes,
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof GhostBadgeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ghostBadgeIcon: Story = {
  args: {
    label: "Canceled",
    types: "primary",

    typeIcon: "IconClose",
  },
  argTypes: {},
};
