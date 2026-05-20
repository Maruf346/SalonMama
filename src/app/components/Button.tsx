import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95',
      secondary: 'bg-[#EAF6FF] text-[#007BFF] hover:bg-[#d4ebff] active:scale-95',
      outline: 'border-2 border-[#36A2FF] text-[#007BFF] hover:bg-[#EAF6FF] active:scale-95',
      ghost: 'text-[#1E293B] hover:bg-[#EAF6FF] active:scale-95',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
