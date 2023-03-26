import Sidebar from "../../components/SideBar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";


import './Single.css'

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}