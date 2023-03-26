import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/SideBar/SideBar";
import './HomePage.css'



export default function Homepage() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}