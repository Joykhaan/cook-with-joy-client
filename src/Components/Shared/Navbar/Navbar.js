import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);
    console.log('user   found',user?.email)
    const [isHovering, setIsHovering] = useState();
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

      const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-orange-600 py-6">
                <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-white font-bold md:text-xl">Learn with Joy</Link>
                
                </div>
                <div className='flex justify-center' >
                    <Link className='mr-2 md:mr-8 text-slate-100' to='/'>Courses</Link>
                    <Link className='mr-2 md:mr-8 text-slate-100' to='/blog'>Blog</Link>
                    <Link className='mr-2 md:mr-8 text-slate-100' to='/faq'>FAQ</Link>
                    {isHovering && <span className='text-lg text-white font-bold'>{user?.displayName}</span>}
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            
                            {
                                user?.photoURL?<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="w-10 rounded-full">
                                <img src={user?.photoURL} alt='' />
                            </div>: <FaUser className='text-white-600'></FaUser>
                            }
                            
                            
                            
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            
                                
                              <li  className="justify-center flex text-orange-500 txt-3xl md:hidden block">Hey! {user?.displayName}</li>
                            <li><Link to='/login' className="justify-between">Login</Link></li>
                            
                            <li><Link to='/register' className="justify-between">Register</Link></li>
                              <li>  <Link onClick={handleLogOut}  className="justify-between">Logout</Link></li>
                              {/* <li><Link to='/register' className="justify-between">{user?.email}</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;