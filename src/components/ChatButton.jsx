
import React from 'react'
import { Container } from './common/container'
import { Button } from './common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const ChatButton = ({getHidden,setHidden}) => {
  

  const click = (e) => {
    e.stopPropagation()
    setHidden(!getHidden)
  }
  return (
    <div className={` flex items-center justify-end fixed  top-[90%] right-[8%]`}>
        {<Button onclick={click} className={`  font-chat-font rounded-full size-[65px]  sm:size-[77px] text-[52px]  flex items-center justify-center sm:py-5 sm:pl-7 sm:pr-[31px] ${getHidden ? '  bg-white shadow-chatbtn font-bold ': 'bg-accent'}`}>
         {getHidden?  <FontAwesomeIcon className='material-symbols-outlined  text-[30px] sm:text-[40px] text-black' icon={faXmark} /> : <img  src="img/C.png" alt="C" />  }
        </Button>}
        {/* <span class=" ">close</span> */}

    </div>
  )
}
