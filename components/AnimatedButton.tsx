'use client'
import clsx from 'clsx'
import React from 'react'

type ButtonVariants = 'primary' | 'outline' | 'ghost' | 'accent'

type Props = {
  className?: string
  children: React.ReactNode
  variant?: ButtonVariants
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function AnimatedButton({
  children,
  className,
  variant = 'primary',
  disabled,
  type = 'button',
  onClick,
}: Props) {
  const base = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium',
    'transition-colors transition-transform duration-150',
    'hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent/30 focus-visible:ring-offset-cream',
    disabled && 'opacity-70 cursor-not-allowed',
    variant === 'primary' && 'bg-charcoal text-cream hover:bg-ebony',
    variant === 'accent' && 'bg-accent text-ebony hover:bg-amber',
    variant === 'outline' && 'text-charcoal underline underline-offset-4 decoration-charcoal/40 hover:decoration-charcoal',
    variant === 'ghost' && 'text-smoke hover:text-charcoal',
    className,
  )

  return (
    <button
      type={type}
      disabled={disabled}
      className={base}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
