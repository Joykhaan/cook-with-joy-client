import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaEnvelopeOpen } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Sidebar = () => {

    const [tutorials, setTutorials,toggleTheme]=useState([]);

    //for load data first time
    useEffect(()=>{
        fetch('http://localhost:5000/recipe-tutorials')
        .then(res => res.json())
        .then(data => setTutorials(data));
    },[])

    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider();
    const {login,gitLogin} = useContext(AuthContext);

    const handleGoogleSignIn=()=>{
        login(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>console.error(error))
    }
    const handleGitSignIn=()=>{
        gitLogin(gitProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>console.error(error))
    }

    

    return (
        <div>
            <h2 className='text-orange-500 font-bold text-2xl flex justify-center mt-8' >{tutorials.length} Courses available</h2>
            {
                tutorials.map(tutorial => <p className='ml-8 mt-2' key={tutorial.id}>
                    <Link to={`/courses/${tutorial.id}`} className='text-slate-100 font-bold' id='sidetxt' >{tutorial.name}</Link>
                </p> )
            }
            <div className='flex-lg justify-center mt-8'>
                <Link to={'/login'}>

             <button  className="btn  btn-primary md:mx-4 mx-2  mt-4"><FaEnvelopeOpen></FaEnvelopeOpen>  Email</button>
                </Link>
             <button onClick={handleGoogleSignIn} className="btn  btn-primary md:mx-4 mx-2  mt-4"> <FaGoogle></FaGoogle>  Google</button>
            <button onClick={handleGitSignIn} className="btn  btn-primary md:mx-4 mx-2  mt-4" > <FaGithub></FaGithub>  Github</button>   
            </div>
            
        </div>
    );
};

export default Sidebar;