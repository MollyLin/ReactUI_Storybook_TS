import Button from './Button';

export default {
  title: 'Input/MaterialButton',
  component: Button,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'default',
    variant: 'contained',
  },
};

export const Outlined = {
  args: {
    label: 'outlined',
    variant: 'outlined',
  },
};

export const Text = {
  args: {
    label: 'text',
    variant: 'text',
  },
};