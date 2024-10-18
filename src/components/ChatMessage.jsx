import React from 'react';
import { Button } from './common/Button';

export default function ChatMessage({ chatMessage,getHidden}) {


  return (
    <div className={`${!getHidden && 'hidden'}  w-[290px] sm:w-[331px]  bg-mainChat-bg fixed z-50 rounded-t-lg rounded-r-lg top-[32%]  sm:top-[25%] right-[9.5%] `}>
      <div className="bg-accent h-[76px] flex items-center justify-start px-5 rounded-t-lg rounded-r-lg">
        <h1 className="text-lg font-bold text-btn-text w-auto ">Chat with Cypher</h1>
      </div>
      <div className="mt-7 px-[15px]">
        <div className="flex flex-col gap-[15px] ">
          {chatMessage.map((item, i) => {
            return (
              <div
                key={item.id}
                className={` ${
                  i === 0 || i === 3
                    ? 'place-self-end bg-chat-bg text-white '
                    : 'place-self-start bg-inherit text-secondary'
                } flex items-center justify-center max-w-[213px] text-[10px] sm:text-xs font-normal px-[13px] h-[40px] sm:h-[57px] border border-headerText/20 rounded-md leading-normal`}
              >
                <p>{item.message}</p>
              </div>
            );
          })}
        </div>
      <div className='mt-4 '>
        <input type=" text" className='text-xs text-secondary w-full min-h-[42px] px-2.5 bg-inherit border border-headerText/20 leading-none ' placeholder='Enter your question' />
        <div className='flex items-center justify-between mt-2.5'>
            <div className='flex items-center justify-center'>
                <img src="img/chatCamera.png" alt="camera" />
                <img src="img/Chatembed.png" alt="embed" />
                <img src="img/ChatImg.png" alt="img" />
            </div>
            <Button className='mb-3 text-xs font-normal rounded-full w-[80px] h-[30px] flex items-center justify-center'>
                Send
            </Button>
        </div>
      </div>
      </div>
    </div>
  );
}
