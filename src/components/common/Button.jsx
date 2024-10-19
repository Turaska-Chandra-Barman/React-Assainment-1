import React from 'react';
import { cn } from '../../lib/tailwindMarge';

export const Button = ({ className, children, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={cn(
        ' hover:bg-green-300 hover:text-primary hover:shadow-chatbtn transition delay-100 duration-150 text-btn-text text-xs  px-5 py-3 sm:py-4 font-bold bg-accent rounded-lg leading-none',
        className
      )}
    >
      {children}
    </button>
  );
};
