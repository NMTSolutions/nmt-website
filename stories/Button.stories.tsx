import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "@/components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    background: {
      control: { type: "color" },
    },
    height: {
      control: { type: "number" },
    },
    width: {
      control: { type: "number" },
    },
    margin: {
      control: { type: "number" },
    },
    padding: {
      control: { type: "number" },
    },
    onClick: { action: "onClick" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: "Primary",
  variant: "primary",
  size: "md",
};

export const TextButton = Template.bind({});
TextButton.args = {
  label: "Text",
  variant: "text",
  size: "md",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  label: "Outlined",
  variant: "outlined",
  size: "md",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: "Small",
  variant: "primary",
  size: "sm",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  label: "Medium",
  variant: "primary",
  size: "md",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  label: "Large",
  variant: "primary",
  size: "lg",
};
