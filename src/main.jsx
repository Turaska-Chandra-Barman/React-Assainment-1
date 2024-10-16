import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainContainer } from './components/MainContainer.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';
import { Incidents } from './components/Incidents.jsx';



const router = createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {

        path:'Dashboard',
        element:<MainContainer/>
      },
      {
        path:':Incidents',
        element:<Incidents/>
      },
      {
        path:'Locations',
        element:<h1>this is a Locations</h1>
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
  </StrictMode>
);
