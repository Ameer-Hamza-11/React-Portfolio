import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/about',
        element: <About/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/Projects',
        element: <Projects/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
        errorElement: <ErrorPage/>,
      },

    ]
  }
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App
