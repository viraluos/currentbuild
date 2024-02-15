import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, disabled, type = 'button', ...props }, ref) => {
  return(
    <button
      type={type} disabled={disabled} ref={ref} {...props} 
      className={twMerge( ` rounded-full `, disabled && 'opacity-75 cursor-not-allowed', className )}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;