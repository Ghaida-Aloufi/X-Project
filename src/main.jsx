import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Profile from './Pages/Profile.jsx'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  }, {
    path: "/Profile",
    element: <Profile/>,
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
