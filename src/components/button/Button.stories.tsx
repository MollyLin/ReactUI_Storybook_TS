import Button from './Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default {
  title: 'Input/MaterialButton',
  component: Button,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Button',
    variant: 'contained',
  },
};

export const Outlined = {
  args: {
    label: 'Button',
    variant: 'outlined',
  },
};

export const Text = {
  args: {
    label: 'Button',
    variant: 'text',
  },
};

export const DisabledButton = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const StartIconButton = {
  args: {
    label: 'Button',
    startIcon: <DeleteIcon />,
  },
};