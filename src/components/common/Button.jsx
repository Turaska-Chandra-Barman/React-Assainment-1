
import React from 'react'
import { cn } from '../../lib/tailwindMarge'

export const Button = ({className,children,onclick}) => {
  return (
    <button onClick={onclick} className={cn('  text-btn-text px-6 py-3 sm:py-4 font-bold bg-accent rounded-lg leading-none',className)}>{children}</button>
  )
}
