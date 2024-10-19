import React, { useState } from 'react';
import Data from '../lib/Json.js';
import { CardItem } from './CardItem.jsx';
import { useOutletContext } from 'react-router-dom';


export const MainContainer = () => {

  const [{cardlist,chatMessage}] = useOutletContext()
  return (
    <>
      <CardItem cardlist={cardlist} chatMessage={chatMessage} />
    </>
  );
};
