import React from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import Sidebar from '../SideBar/SideBar';
import './Home.css'



const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='home'>
        <Posts/>
        <Sidebar/>



            </div>
        </div>
    );
};

export default Home;