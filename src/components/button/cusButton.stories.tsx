import type { Meta, StoryObj } from '@storybook/react';
import Button from './cusButton';

const meta: Meta<typeof Button> = {
  title: 'Input/CusButton',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
  },
};