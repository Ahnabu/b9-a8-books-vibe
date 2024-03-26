import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';
import Home from './Components/Home/Home';
import Listed from './Components/Listed/Listed';
import PageToRead from './Components/Page/PageToRead';
import SelectedBook from './Components/SelectedBook/SelectedBook';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:id",
        element: <SelectedBook></SelectedBook>,
        loader: ()=>fetch('/books.json')
      },
      {
        path: "/listed-books",
        element: <Listed></Listed>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/pages-to-read",
        element: <PageToRead></PageToRead>,
      },
      
    ]
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
