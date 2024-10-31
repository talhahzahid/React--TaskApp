import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import Register from './Pages/Register.jsx'
import NotFind from './Pages/NotFind.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'*',
        element:<NotFind/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} >
    <App />
  </RouterProvider>,
)
