

import Sidebar from "../../pages/Home/SideBar/SideBar";
import SinglePost from "../SinglePost/SinglePost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}