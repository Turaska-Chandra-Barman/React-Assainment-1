import React, { useState } from 'react';
import { ChatButton } from './ChatButton';
import ChatMessage from './ChatMessage';
import { Search } from './common/Search';
import { Button } from './common/Button';
import { Input } from './common/input';
import { Filter } from './common/Filter';
import { Link, useOutletContext } from 'react-router-dom';
import { MainCard } from './MainCard';

export const CardItem = () => {
  const [{ cardlist, chatMessage }] = useOutletContext();
  const [getHidden, setHidden] = useState(false);

  return (
    <>
      {
        <Search>
          <div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center justify-center sm:justify-between gap-y-2 gap-x-20 flex-wrap "
          >
            <div className="place-self-start sm:place-self-auto">
              <small className="text-xs text-secondary font-normal">
                Wellcome back
              </small>
              <h1 className=" text-[20px] sm:text-[26px] text-primary font-bold">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center justify-center sm:justify-start  flex-wrap  gap-3">
              <Input className="w-full sm:w-auto" />
              <Filter className="w-full sm:w-auto" />

              <Link to="/Incidents">
                {' '}
                {
                  <Button className="w-full sm:w-auto px-6 flex  place-self-stretch">
                    Cypher AI
                  </Button>
                }
              </Link>
            </div>
          </div>
        </Search>
      }
      <MainCard setHidden={setHidden} getHidden={getHidden} />

      <ChatMessage chatMessage={chatMessage} getHidden={getHidden} />

      {<ChatButton getHidden={getHidden} setHidden={setHidden} />}
    </>
  );
};
