import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MyButton from '../MyButton/MyButton';

const meta = {
  title: 'Example/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedBtn: Story = {
  args: {
    color: 'red',
    children: "Button"
  },
};

export const OrangeBtn: Story = {
  args: {
    color: 'orange',
    children: "Button"
  },
};

export const BigBtn: Story = {
  args: {
    color: 'orange',
    children: "Button",
    big: true
  },
};
