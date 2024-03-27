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
import Read from './Components/Read/Read';
import Wishlist from './Components/Wishlist/Wishlist';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    errorElement: <div><h1 className='text-4xl'>404 Page not found</h1></div> ,
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
        children: [
          {
          path: "/listed-books",
            element: <Read></Read>,
            loader: () => fetch('/books.json')
          },
          {
          path: "/listed-books/wishlist",
            element: <Wishlist></Wishlist>,
            loader: () => fetch('/books.json')
          },
        ],
        
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
