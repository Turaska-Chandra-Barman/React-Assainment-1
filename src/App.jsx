import { useState } from 'react';
import './App.css';
import { Header } from './components/common/Header';
import Data from './lib/Json.js';
import { CardItem } from './components/CardItem.jsx';

function App() {
  const [getData, setData] = useState(Data);
  const { navlist, cardlist, incidents, newIncidents,  chatMessage } = getData[0];

  return (
    <>
      <Header navlist={navlist} />
      <CardItem cardlist={cardlist} chatMessage={chatMessage} />
    </>
  );
}

export default App;
