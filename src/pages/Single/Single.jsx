import SinglePost from "../../components/SinglePost/SinglePost";
import Sidebar from "../../components/SideBar/SideBar";

import './Single.css'

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}