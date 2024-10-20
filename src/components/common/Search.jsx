import React from 'react';

export const Search = ({ children }) => {
  return (
    <div className="w-full bg-[#F2F2F3] ">
      <div className="max-w-headerWidth mx-auto px-2.5 py-10 m mt-[60px]  sm:mt-[100px]  mb-4 sm:mb-5">
        {children}
      </div>
    </div>
  );
};
