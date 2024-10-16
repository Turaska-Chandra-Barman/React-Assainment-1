import React, { useState } from 'react'
import Data from '../lib/Json.js'
import { CardItem } from './CardItem.jsx'
import { ErrorPage } from './ErrorPage.jsx';
import { useRouteError } from 'react-router-dom';

export const MainContainer = () => {

    const [getData, setData] = useState(Data);
  const { navlist, cardlist, incidents, newIncidents,  chatMessage } = getData[0];
  return (
            <>
                <CardItem cardlist={cardlist} chatMessage={chatMessage} />
           
            </>
  )
}
