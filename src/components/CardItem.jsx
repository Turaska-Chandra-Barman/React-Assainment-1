import React, { useState } from 'react';
import { Container } from './common/container';
import { ChatButton } from './ChatButton';
import ChatMessage from './ChatMessage';
import { Search } from './common/Search';
import { Button } from './common/Button';
import { Input } from './common/input';
import { Filter } from './common/Filter';

export const CardItem = ({ cardlist, chatMessage }) => {
  const [getHidden, setHidden] = useState(false);

  return (
    <>
      {
        <Search>
          <div className="flex items-center justify-between gap-2">
            <div className="place-self-start sm:place-self-auto">
              <small className="text-xs text-secondary font-normal">
                Wellcome back
              </small>
              <h1 className=" text-[20px] sm:text-[26px] text-primary font-bold">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center flex-col lg:flex-row  gap-3">
              <Input/>
             <Filter/>
              {<Button>Cypher AI</Button>}
            </div>
          </div>
        </Search>
      }
      <Container className=" mb-32 mt-23     sm:mt-10  ">
        <div className=" grid grid-cols-[repeat(auto-fill,minmax(306px,1fr))] overflow-hidden gap-x-6 gap-y-8 justify-items-center">
          {cardlist.map(({ id, img, logo, logoName, name, prices, text }) => {
            return (
              <div key={id} className="max-w-[306px]">
                <div className="relative ">
                  <div className="relative ">
                    <img src={img} alt="cardimg-01" />
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
        {getHidden && (
          <ChatMessage chatMessage={chatMessage} getHidden={getHidden} />
        )}
        {<ChatButton getHidden={getHidden} setHidden={setHidden} />}
      </Container>
    </>
  );
};
