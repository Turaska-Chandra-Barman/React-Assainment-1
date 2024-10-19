import React from 'react';
import { cn } from '../../lib/tailwindMarge';

export const Filter = ({ className }) => {
  return (
    <div
      className={cn(
        'font-normal bg-white py-2.5  lg:place-self-auto  sm:py-4  px-1.5 sm:px-2.5 text-sm rounded-md text-secondary/80',
        className
      )}
    >
      <select className="appearance-none w-full bg-white" name="" id="">
        <option value="">Sort By:Date modifed</option>
      </select>
    </div>
  );
};
