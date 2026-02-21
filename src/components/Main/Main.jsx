import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const Main = () => {
    return (
        <div className='min-h-screen flex flex-col bg-white mx-auto'>
        <Navbar></Navbar>
        <section className='flex flex-grow'><Outlet></Outlet></section>
        <Footer></Footer>
        </div>
    );
};

export default Main;