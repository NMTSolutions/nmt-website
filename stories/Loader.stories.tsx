import Loader, { LoaderProps } from "@/components/Loader/Loader";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Loaders",
  component: Loader,
  argTypes: {
    ringColor: { control: { type: "color" } },
    spinnerColor: { control: { type: "color" } },
    height: { control: { type: "number" } },
    width: { control: { type: "number" } },
    duration: { control: { type: "number" } },
    strokeWidth: { control: { type: "number" } },
  },
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const CircularLoader = Template.bind({});
CircularLoader.args = {
  variant: "circular",
};

export const MaterialLoader = Template.bind({});
MaterialLoader.args = {
  variant: "material",
};

export const LinearLoader = Template.bind({});
LinearLoader.args = {
  variant: "linear",
};
