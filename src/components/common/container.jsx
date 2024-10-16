import React from 'react'
import { cn } from '../../lib/tailwindMarge'

export const Container = ({children,className}) => {
  return (
        <div className={cn('max-w-primaryConWidth mx-auto px-2.5 mt-10', className )}>
            {children}
        </div>
  )
}
