import React from 'react';
import { Outlet } from 'react-router-dom';
import Single from '../components/single/Single';
import Topbar from '../components/TopBar/TopBar';


const Main = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Outlet></Outlet>
       
            
        </div>
    );
};

export default Main;