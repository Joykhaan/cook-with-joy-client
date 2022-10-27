import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Sidebar from '../../Components/Shared/Sidebar/Sidebar';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Footer from '../../Pages/Footer/Footer';
import './Main.css';

const Main = () => {

    const{theme} = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 gap-2'>
                <div className='col-span-4 md:col-span-1 bg-slate-900' id={theme}>
                    <Sidebar className='  py-10 hidden md:block '></Sidebar>
                </div>
                 
                <div className='col-span-4 md:col-span-3  bg-slate-900 py-10 'id={theme}>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer className='footer'></Footer>
            
        </div>
    );
};

export default Main;