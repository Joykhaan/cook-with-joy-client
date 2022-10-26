import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Sidebar from '../../Components/Shared/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 gap-2'>
                <div className='col-span-4 md:col-span-1 bg-slate-900'>
                    <Sidebar className='  py-10 hidden md:block '></Sidebar>
                </div>
                 
                <div className='col-span-4 md:col-span-3  bg-slate-900 py-10'>
                    <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Main;