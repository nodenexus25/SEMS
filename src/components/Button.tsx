import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: '!px-4 !py-2 !text-[11px]',
  md: '!px-6 !py-3 !text-sm',
  lg: '!px-8 !py-4 !text-base',
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  )
}

export default Button
