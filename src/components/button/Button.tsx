import { Button as MuiButton } from '@mui/material';

export interface ButtonProps {
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{label}</MuiButton>;
};

Button.defaultProps = { variant: 'contained' };

export default Button;