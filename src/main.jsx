import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<div className='text-red-500 font-semibold text-[50px]'>Page is not found</div>,
        children: [
      {
        path: "/",
        element: <Home></Home>
      },
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
