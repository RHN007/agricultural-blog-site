import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Write from "../pages/Wrtite/Write";


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
                path: '/write', 
                element: <Write></Write>
            }
        ]
    }
])




export default router;
