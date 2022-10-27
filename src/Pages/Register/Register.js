import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {


    const {createUser,updateUserProfile,}= useContext(AuthContext);
    const[error, setError]= useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = event =>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value
        const photourl= form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name,photourl,email,password)

        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            form.reset()
            navigate(from,{replace: true});
            handleUpdateUser(name,photourl);
            setError('');
            
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
          })
    }

    const handleUpdateUser =(name,photourl)=>{
        const profile={
            displayName: name,
            photoURL: photourl
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Until login, you can not got the checkout place! please feel free to Login or register and help us to give greate service to you!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" id='logreg'>
                        <form onSubmit={handleOnSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">photoURL</span>
                                </label>
                                <input name='photoUrl' type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                <Link to={'/login'} className="label-text-alt link link-hover text-blue-600/100 text-lg">Login</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-lg">Register</button>
                            </div>
                            <h2 className='text-lg text-red-600'>{error}</h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;