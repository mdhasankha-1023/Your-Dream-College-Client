import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Other from "../Layout/Other";
import SignUp from "../Pages/SignUP/SignUp";
// import Login from "../Pages/Login/Login";
// import Login from "../Pages/Login/Login";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                
            }
        ]
        
    },
    {
      path: '/sign-up',
      element: <Other></Other>,
      children: [
        {
          path: '/sign-up',
          element: <SignUp></SignUp>
        },
        // {
        //   path: '/log-in',
        //   element: <Login></Login>
        // },
      ]
    }
  ])

  export default router;