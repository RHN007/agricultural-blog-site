import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Settings from "../pages/Settings/Settings";
import Single from "../pages/Single/Single";
import Write from "../pages/Write/Write";





const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/single', 
                element: <Single></Single>
            }, 
            {
                path: '/login', 
                element: <Login></Login>

            }
            , 
            {
                path: '/register', 
                element: <Register></Register>
            }, 
            {
                path: '/settings', 
                element:<Settings></Settings>
            }, 
            {
                path: '/write', 
                element: <Write></Write>
            }
        ]
    }
])




export default router;
