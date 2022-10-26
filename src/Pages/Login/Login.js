import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {


    const[error, setError]= useState('')
    const navigate = useNavigate()
    const {logIn} = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleonSubmit =event=>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      logIn(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from,{replace: true});
        })
        .catch(error=>{
          console.error(error)
          setError(error.message)
        })
    }
    
    return (
        <div>
          
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleonSubmit} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered"  required/>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <h2>{error}</h2>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;