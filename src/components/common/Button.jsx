
import React from 'react'
import { cn } from '../../lib/tailwindMarge'

export const Button = ({className,children}) => {
  return (
    <button className={cn(' place-self-stretch text-btn-text px-6 py-3 sm:py-4 font-bold bg-accent rounded-md leading-none',className)}>{children}</button>
  )
}
