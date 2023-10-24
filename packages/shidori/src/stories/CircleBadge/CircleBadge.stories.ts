import type { Meta, StoryObj } from "@storybook/react";
import CircleBadge from "../../../src/components/CircleBadge";
import { contentTypes } from "../../../src/components/CircleBadge/types";

const meta = {
  title: "Badges/CircleBadge",
  component: CircleBadge,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CircleBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const circleBadge: Story = {
  args: {
    type: "audio",
    CircleBadgeSize: "md",
  },
  argTypes: {
    type: {
      options: contentTypes,
      control: { type: "select" },
    },
    CircleBadgeSize: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
};
export const CustomCircleBadgeSkylue: Story = {
  args: {
    type: "video",
    CircleBadgeSize: "md",
    darkBackground: "#322662",
    lightBackground: "#e1f5fa",
    darkColor: "rgb(70, 202, 235)",
    lightColor: "rgb(70, 202, 235)",
  },
  argTypes: {
    type: {
      options: contentTypes,
      control: { type: "select" },
    },
    CircleBadgeSize: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
};
export const CustomCircleBadgeMintyGreen: Story = {
  args: {
    type: "game",
    CircleBadgeSize: "md",
    darkBackground: "#1b3c48",
    lightBackground: "#dffff3",
    darkColor: "rgb(75, 208, 139)",
    lightColor: "rgb(75, 208, 139)",
  },
  argTypes: {
    type: {
      options: contentTypes,
      control: { type: "select" },
    },
    CircleBadgeSize: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
};
export const CustomCircleBadgevoryCream: Story = {
  args: {
    type: "image",
    CircleBadgeSize: "md",
    darkBackground: "#4D3A2A",
    lightBackground: "#FFF6EA",
    darkColor: "rgb(248, 192, 118)",
    lightColor: "rgb(248, 192, 118)",
  },
  argTypes: {
    type: {
      options: contentTypes,
      control: { type: "select" },
    },
    CircleBadgeSize: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
};

export const CustomCircleBadgeSapphire: Story = {
  args: {
    type: "challenge",
    CircleBadgeSize: "md",
    darkBackground: "#0F52BA",
    lightBackground: "#87CEFA",
    darkColor: "rgb(255, 255, 255)",
    lightColor: "rgb(255, 255, 255)",
  },
  argTypes: {
    type: {
      options: contentTypes,
      control: { type: "select" },
    },
    CircleBadgeSize: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
};

export const CustomCircleBadgeRose: Story = {
  args: {
    type: "gallery",
    CircleBadgeSize: "md",
    darkBackground: "#FF007F",
    lightBackground: "#FF69B4",
    darkColor: "rgb(255, 255, 255)",
    lightColor: "rgb(255, 255, 255)",
  },
  argTypes: {
    type: {
      options: contentTypes,
      control: { type: "select" },
    },
    CircleBadgeSize: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
};
