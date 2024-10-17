
import React, { Children } from 'react'
import { cn } from '../../lib/tailwindMarge'

export const IncidentContainer = ({children,className}) => {
  return (
    <div className={cn('max-w-[773px] mt-10 mx-auto px-10',className)}>
        {children}
    </div>
  )
}
