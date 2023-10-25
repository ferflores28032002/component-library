import type { Meta, StoryObj } from "@storybook/react";

import Button from "../../components/Button";

import { BeatLoaderExample } from "./components/BeatLoader";

import { types, variants } from "../../../src/components/Button/constants";

import { LeftEmailIcon, RightEmailIcon } from "./components/IconsExample";

const meta = {
  title: "Buttons/Button",
  component: Button,
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
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    label: "Hello world!",
    types: "primary",
    variants: "solid",
    isDisabled: false,
    isLoading: false,
    size: "md",
  },
};
export const Outline: Story = {
  args: {
    label: "Hello world!, I'm Fernando!",
    types: "error",
    variants: "outline",
    isDisabled: false,
    isLoading: false,
    size: "md",
  },
};
export const ghost: Story = {
  args: {
    label: "Hello world Developers!",
    types: "warning",
    variants: "ghost",
    isDisabled: false,
    isLoading: false,
    size: "md",
  },
};
export const Isloading: Story = {
  args: {
    label: "Hello world Developers!",
    types: "success",
    variants: "solid",
    isDisabled: false,
    isLoading: true,
    size: "md",
  },
};
export const CustomIsloading: Story = {
  args: {
    label: "BeatLoader",
    types: "error",
    variants: "solid",
    isDisabled: false,
    size: "md",
    isLoading: true,
    spinner: BeatLoaderExample,
  },
};
export const IsDisabled: Story = {
  args: {
    label: "Hello world Developers!",
    types: "success",
    variants: "solid",
    size: "md",
    isDisabled: true,
    isLoading: false,
  },
};
export const CustomSize: Story = {
  args: {
    label: "Log in",
    types: "primary",
    variants: "solid",
    isDisabled: false,
    isLoading: false,
    width: "300px",
    size: "md",
  },
};

export const IconLeft: Story = {
  args: {
    label: "Register",
    types: "primary",
    variants: "solid",
    isDisabled: false,
    isLoading: false,
    size: "md",
    width: "240px",
    rightIcon: LeftEmailIcon,
  },
};

export const IconRight: Story = {
  args: {
    label: "Delete Product",
    types: "primary",
    variants: "solid",
    size: "md",
    isDisabled: false,
    isLoading: false,
    leftIcon: RightEmailIcon,
  },
  argTypes: {},
};
