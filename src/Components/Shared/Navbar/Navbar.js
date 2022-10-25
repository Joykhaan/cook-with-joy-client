import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-red-500 py-6">
                <div className="flex-1">
                <Link  className="btn btn-ghost normal-case text-xl">daisyUI</Link>

                </div>
                <div>
                    <Link to='/'>Courses</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/faq'>FAQ</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                
                                <Link to='/courses' className="justify-between">profile</Link>
                            </li>
                            <li><Link to='/blog' className="justify-between">profile</Link></li>
                            <li><Link to='/faq' className="justify-between">profile</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;