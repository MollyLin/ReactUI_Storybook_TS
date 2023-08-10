import styled , {css} from 'styled-components';

const containedStyle = css`
  background: #1976d2;
  color: #FFF;
`;

const outlinedStyle = css`
  background: #FFF;
  color: #1976d2;
  border: 1px solid #1976d2;
  &:hover {
    background: #197610;
  }
`;

const textStyle = css`
  background: #FFF;
  color: #1976d2;
  &:hover {
    background: #197610;
  }
`;

const variantMap = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle,
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  min-width: 100px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border 0.2s, opacity 0.2s ease-in-out;
  ${(props) => variantMap[props.$variant] || variantMap.primary}
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`;

interface ButtonProps {
  /**
   * 設置按鈕類型
   */
  variant: 'contained' | 'outlined' | 'text',
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * 客製化樣式
   */
  className?: string,
  /**
   * 內容
   */
  children: string
  /**
   * 禁用狀態
   */
  isDisabled: boolean,
  /**
   * 點擊事件
   */
  onClick?: () => void;
}

const Button = ({ 
  variant,
  backgroundColor,
  className,
  children,
  isDisabled,
  onClick,
  ...props
}: ButtonProps) => {
  
  return (
    <StyledButton
      type="button"
      className={className}
      style={{ backgroundColor }}
      $variant={variant}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;