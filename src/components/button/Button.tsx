import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

/**
 * Inheriting All Of The MUI's Button Props.
 * https://mui.com/material-ui/api/button/#main-content 
 * */  
export interface ButtonProps extends MuiButtonProps {
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{label}</MuiButton>;
};

Button.defaultProps = { variant: 'contained' };

export default Button;