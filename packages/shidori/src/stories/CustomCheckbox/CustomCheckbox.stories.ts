import type { Meta, StoryObj } from "@storybook/react";
import CustomCheckbox from "../../../src/components/CustomCheckbox";

const meta = {
  title: "Components/Forms",
  component: CustomCheckbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const checkbox: Story = {
  args: {
    colorScheme: "neAccent",
    defaultChecked: true,
    isChecked: false,
    isDisabled: false,
    isInvalid: false,
    size: "lg",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    onChange: { action: "changed" },
  },
};
