import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
}  from "react-router-dom";
// import LandingPage from './pages/LandingPage.jsx';
// import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import TestPage from './pages/TestPage.jsx';
import TestMangaement from './pages/TestMangaement.jsx';
import TestResults from './pages/TestResults.jsx';
import AdminManageMent from './pages/AdminManageMent.jsx';



const Layout = () => {
  return(
    <div>

      {/* <Navbar/> */}
      <Outlet/> 
      {/* <Footer/> */}
   
    </div>
  
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />
      },
     
    
    ],
    
  }, {
    path: "/login",
    element: <Login />
  },
  {
    path: "/testpage",
    element: <TestPage />
  },
  {
    path: "/manage",
    element: <TestMangaement />
  },
  {
    path: "/results",
    element: <TestResults />
  },
  {
    path: "/adminmanage",
    element: <AdminManageMent />
  },
  //  {
  //   path: "/register",
  //   element: <Register />
  // },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

    <App />

  </React.StrictMode>,
)

