import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';

import Sidebar from '../../components/SideBar/SideBar';
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