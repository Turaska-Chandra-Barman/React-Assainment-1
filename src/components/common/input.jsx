import React from 'react'
import { cn } from '../../lib/tailwindMarge'

export const Input = ({className}) => {
  return (
    <div className={cn('flex items-center justify-center bg-white py-2.5  sm:py-4  px-1.5 sm:px-2.5 gap-1 text-xs rounded-md ',className)}>
    <img className='w-[10px] sm:w-auto' src="img/search.png" alt="search" />
    <input
      className="border-0 outline-none w-full sm:w-max"
      type="text"
      placeholder="Search  incident"
    />
  </div>
  )
}
