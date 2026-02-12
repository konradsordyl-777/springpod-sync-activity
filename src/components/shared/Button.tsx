import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 cursor-pointer'
  const variants = {
    primary: 'bg-accent text-surface-base hover:bg-accent-hover',
    secondary: 'bg-surface-2 border border-edge text-ink-secondary hover:bg-surface-3 hover:text-ink',
    ghost: 'bg-transparent text-ink-tertiary hover:text-ink-secondary hover:bg-surface-2',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2 text-[13px]',
    lg: 'px-8 py-3 text-sm',
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
