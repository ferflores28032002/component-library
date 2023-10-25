import type { Meta, StoryObj } from "@storybook/react";

import Badge from "../../../src/components/Badge";

import { types, variants } from "../../../src/components/Badge/constants";

const meta = {
  title: "Badges/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    types: {
      options: types,
      control: { type: "select" },
    },
    variants: {
      options: variants,
      control: { type: "select" },
    },
    rounded: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const solid: Story = {
  args: {
    label: "Administrator",
    types: "primary",
    variants: "solid",
    rounded: "md",
  },
  argTypes: {},
};
export const outline: Story = {
  args: {
    label: "Pending",
    types: "warning",
    variants: "outline",
    rounded: "md",
  },
  argTypes: {},
};
export const ghost: Story = {
  args: {
    label: "Active",
    types: "success",
    variants: "ghost",
    rounded: "md",
  },
  argTypes: {},
};
export const ghostSM: Story = {
  args: {
    label: "Completed",
    types: "primary",
    variants: "ghost",
    rounded: "sm",
  },
  argTypes: {},
};
