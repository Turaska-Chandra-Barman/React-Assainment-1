import { useState } from 'react';
import './App.css';
import { Header } from './components/common/Header';
import Data from './lib/Json.js';
import { Outlet } from 'react-router-dom';
// import { CardItem } from './components/CardItem.jsx';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import { Incidents } from './components/Incidents.jsx';
// import { IncidentsDetails } from './components/IncidentsDetails.jsx';
// import { ErrorPage } from './components/ErrorPage.jsx';

function App() {
  const [getData, setData] = useState(Data);
  const { navlist, cardlist, incidents, newIncidents,  chatMessage } = getData[0];

  return (

    <>

 {/* <BrowserRouter>
    <Routes>
      <Route path='' element = {<Header navlist={navlist}/>}>
        <Route path='/' element={<CardItem cardlist={cardlist} chatMessage={chatMessage} />}></Route>
        <Route path='Dashboard' element={<CardItem cardlist={cardlist} chatMessage={chatMessage} />}></Route>
        <Route path='Incidents' element={<Incidents incidents={incidents}/>}></Route>
        <Route path='Incidents/incidentDetails' element={<IncidentsDetails />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>

 </BrowserRouter> */}



      <Header navlist={navlist} />
     <Outlet context={getData}/>  
    </>
  );
}

export default App;