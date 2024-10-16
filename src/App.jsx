import { useState } from 'react';
import './App.css';
import { Header } from './components/common/Header';
import Data from './lib/Json.js';
import { CardItem } from './components/CardItem.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const [getData, setData] = useState(Data);
  const { navlist, cardlist, incidents, newIncidents,  chatMessage } = getData[0];

  return (
    <>
      <Header navlist={navlist} />
     <Outlet context={getData}/>
    </>
  );
}

export default App;
