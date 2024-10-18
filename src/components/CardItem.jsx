import React, { useState } from 'react';
import { Container } from './common/container';
import { ChatButton } from './ChatButton';
import ChatMessage from './ChatMessage';
import { Search } from './common/Search';
import { Button } from './common/Button';
import { Input } from './common/input';
import { Filter } from './common/Filter';
import { useOutletContext } from 'react-router-dom';
import { MainCard } from './MainCard';

export const CardItem = () => {
  const [{cardlist,chatMessage}] = useOutletContext()
  const [getHidden, setHidden] = useState(false);

  return (
    <>
      {
        <Search>
          <div className="flex items-center justify-center sm:justify-between gap-3 sm:gap-2 flex-wrap ">
            <div className="place-self-start sm:place-self-auto">
              <small className="text-xs text-secondary font-normal">
                Wellcome back
              </small>
              <h1 className=" text-[20px] sm:text-[26px] text-primary font-bold">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center  flex-wrap  gap-3">
              <Input className='w-full sm:w-auto'/>
             <Filter className='w-full sm:w-auto'/>
              {<Button className='w-full sm:w-auto'>Cypher AI</Button>}
            </div>
          </div>
        </Search>
      }
     <MainCard/>
     {getHidden && (
      <ChatMessage chatMessage={chatMessage} getHidden={getHidden} />
    )}
    {<ChatButton getHidden={getHidden} setHidden={setHidden} />}
    </>
  );
};
