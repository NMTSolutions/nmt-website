import TextField, { TextFieldProps } from "@/components/TextField/TextField";
import { Meta, Story } from "@storybook/react";

import "./stories.css";

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
    onChange: { action: "onChange" },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <div style={{ width: "20rem" }}>
    <TextField {...args} />
  </div>
);

export const OutlinedTextField = Template.bind({});
OutlinedTextField.args = {
  variant: "outlined",
  label: "Outlined",
};

export const FilledTextField = Template.bind({});
FilledTextField.args = {
  variant: "filled",
  label: "Filled",
};

export const StandardTextField = Template.bind({});
StandardTextField.args = {
  variant: "standard",
  label: "Standard",
};

export const NativeTextField = Template.bind({});
NativeTextField.args = {
  variant: "native",
  label: "Native",
};

export const TextAreaField = Template.bind({});
TextAreaField.args = {
  variant: "textarea",
  label: "Text Area",
};
