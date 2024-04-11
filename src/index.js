import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Inicio from './pages/Inicio';
import Agenda from './pages/Agenda'
import Historia from './pages/Historia';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>
  },
  {
    path: "/agenda",
    element: <Agenda/>,
  },
  {
    path: "/historia",
    element: <Historia/>
  }
])


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
