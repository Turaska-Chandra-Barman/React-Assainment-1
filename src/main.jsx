import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainContainer } from './components/MainContainer.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';
import { Incidents } from './components/Incidents.jsx';
import { IncidentsDetails } from './components/IncidentsDetails.jsx';
import { NewIncidentDescirbe } from './components/NewIncidentDescirbe.jsx';
import { NewIncidentMap } from './components/NewIncidentMap.jsx';
import { Location } from './components/Location.jsx';
import { MainIncident } from './components/MainIncident.jsx';



const router = createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>,
      
      },
      {

        path:'Dashboard',
        element:<MainContainer/>
      },
      {
        path:'Incidents',
        element:<MainIncident/>
      },
      {
        path:'Incidents',
        element:<MainIncident/>,
      },
      {
        path:'Incidents/IncidentRule',
        element:<Incidents/>,
      },
      {
        path:'Incidents/IncidentRule/incidentDetails',
        element:<IncidentsDetails/>
      },
      {
        path:'Incidents/IncidentRule/incidentDetails/Descirbe',
        element:<NewIncidentDescirbe/>
      },
      {
        path:'Incidents/IncidentRule/incidentDetails/Descirbe/mapdetails',
        element:<NewIncidentMap/>
      },
      {
        path:'Incidents',
        element:<Incidents/>
      },
    
      {
        path:'Locations',
        element:<Location/>
      },
     {
      path:'*',
      element:<ErrorPage/>
     }
      
    ]
   }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </StrictMode>
);