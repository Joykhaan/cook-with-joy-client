import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut, theme, toggleTheme } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState();

    //for mouse hover
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    //for logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-orange-600 py-6">
                <div className="flex-1">
                    <Link className='w-8'>

                        <img src="https://cdn.pixabay.com/photo/2016/07/13/13/59/men-chef-1514505_960_720.png" alt="this is logo" />
                    </Link>
                    <Link to={'/'} className="btn btn-ghost normal-case text-white font-bold md:text-xl">Learn Cooking</Link>

                </div>
                <div className='flex justify-center' >
                    <button onClick={toggleTheme} checked={theme === 'dark'} className="btn mr-2 md:mr-8 text-slate-100 hidden md:block">{theme === 'light' ? 'Light' : 'dark'}</button>
                    <Link className='mr-2 md:mr-8 text-slate-100' to='/'>Courses</Link>
                    <Link className='mr-2 md:mr-8 text-slate-100' to='/blog'>Blog</Link>
                    <Link className='mr-2 md:mr-8 text-slate-100' to='/faq'>FAQ</Link>
                    {isHovering && <span className='text-lg text-white font-bold md:block hidden'>{user?.displayName}</span>}
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                            {/* conditionally handle */}
                            {
                                user?.photoURL ? <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div> : <FaUser className='text-white-600'></FaUser>
                            }



                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                            <li className="justify-center flex text-orange-500 txt-3xl md:hidden block">Hey! {user?.displayName}</li>
                            <li><Link to='/login' className="justify-between">Login</Link></li>

                            <li><Link to='/register' className="justify-between">Register</Link></li>

                            <li>  <Link onClick={handleLogOut} className="justify-between">Logout</Link></li>

                            <li>  <Link onClick={toggleTheme} checked={theme === 'dark'} className="justify-between text-xl font-bold text-orange-500 md:hidden block">{theme === 'light' ? 'Light Mode' : 'dark Mode'}</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;