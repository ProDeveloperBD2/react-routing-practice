import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import FakeHome from './components/FakeHome/FakeHome.jsx';
import Countries from './components/Countries/Countries.jsx';
import Users from './components/Users/Users.jsx';
import UserDeteils from './components/UserDeteils/UserDeteils.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <FakeHome></FakeHome>

      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
   path:'user/:userId',
   element:<UserDeteils></UserDeteils>,
   loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: '/countries',
        element: <Countries></Countries>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
