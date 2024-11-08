import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import FeaturedJobDetails from './Components/FeaturedJobDetails/FeaturedJobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:<Home></Home>, 
      },
      {
        path: "/featureJobDetails/:id",
        element: <FeaturedJobDetails></FeaturedJobDetails>,
        loader: () => fetch('/public/Jobs.json')
      },
      {
           path: "/jobs",
    
           element:<AppliedJobs></AppliedJobs>
      },
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
