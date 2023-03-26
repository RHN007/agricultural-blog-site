import { createBrowserRouter } from "react-router-dom";
import Single from "../components/single/Single";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";


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
            }
        ]
    }
])




export default router;
