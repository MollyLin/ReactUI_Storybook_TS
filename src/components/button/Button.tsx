import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

// choose controls visible
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color' | 'children' | 'startIcon' | 'endIcon' | 'disabled' >

/**
 * Inheriting MUI's Button base props.
 * https://mui.com/material-ui/api/button/#main-content 
 * */  
export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{label}</MuiButton>;
};

Button.defaultProps = { variant: 'contained' };

export default Button;