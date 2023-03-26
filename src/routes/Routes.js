import { createBrowserRouter } from "react-router-dom";
import Single from "../components/single/Single";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Settings from "../pages/Settings/Settings";
import Single from "../pages/Single/Single";
import Write from "../pages/Wrtite/Write";


const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }
        ]
    }
])




export default router;
