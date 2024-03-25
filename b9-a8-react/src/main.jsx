import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';
import Home from './Components/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      }
    ]
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
