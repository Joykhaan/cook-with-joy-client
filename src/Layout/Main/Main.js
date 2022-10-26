import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Sidebar from '../../Components/Shared/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 gap-2'>
                <div className='col-span-1 bg-gray-100 py-10'> <Sidebar></Sidebar> </div>
                <div className='col-span-3 bg-gray-100 py-10'>
                    <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Main;