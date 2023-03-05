import TextField, { TextFieldProps } from "@/components/TextField/TextField";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    color: {
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

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const OutlinedTextField = Template.bind({});
OutlinedTextField.args = {
  variant: "outlined",
};
export const FilledTextField = Template.bind({});
FilledTextField.args = {
  variant: "filled",
};
export const StandardTextField = Template.bind({});
StandardTextField.args = {
  variant: "standard",
};
export const NativeTextField = Template.bind({});
NativeTextField.args = {
  variant: "native",
};
export const TextAreaField = Template.bind({});
TextAreaField.args = {
  variant: "textarea",
};
