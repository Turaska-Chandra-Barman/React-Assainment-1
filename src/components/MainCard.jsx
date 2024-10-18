import React, { useState } from 'react'
import { Container } from './common/container';
import { useOutletContext } from 'react-router-dom';
import ChatMessage from './ChatMessage';
import { ChatButton } from './ChatButton';

export const MainCard = ({getHidden,setHidden}) => {


    const [{cardlist,chatMessage}] = useOutletContext()
 



  return (
    <Container   className=" mb-32 mt-23 sm:mt-10  ">
    <div onClick={(e) => setHidden(false)} className=" grid grid-cols-[repeat(auto-fill,minmax(306px,1fr))]  overflow-hidden gap-x-6 gap-y-8 justify-items-center">
      {cardlist.map(({ id, img, logo, logoName, name  , prices, text }) => {
        return (
          <div key={id} className="max-w-[306px] group">
            <div className="relative ">
              <div className="relative overflow-hidden rounded-lg ">
                <img className='transform group-hover:scale-110 transition duration-200 delay-100' src={img} alt="cardimg-01" />
              </div>
              <div className="flex bg-white items-center justify-center gap-1 text-xs font-bold absolute top-[2%] right-[5%] p-2.5 rounded-full">
                <img src={logo} alt="logo" />
                <h1 className="text-xs font-bold">{logoName}</h1>
              </div>
            </div>
            <div className=" mt-5 space-y-4">
              <h1 className="text-sm font-bold text-primary leading-none">
                {name}
              </h1>
              <p className="text-sm font-normal text-secondary leading-none">
                {text}
              </p>
              <span className="block text-sm font-bold text-primary leading-none">
                {prices}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  
  </Container>
  )
}
