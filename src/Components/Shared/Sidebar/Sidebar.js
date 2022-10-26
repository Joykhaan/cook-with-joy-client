import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Sidebar = () => {

    const [tutorials, setTutorials]=useState([]);

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
            <h2>these are all categories {tutorials.length}</h2>
            {
                tutorials.map(tutorial => <p key={tutorial.id}>
                    <Link to={`/courses/${tutorial.id}`} >{tutorial.name}</Link>
                </p> )
            }
            <div className='flex-lg justify-center mt-8'>
             <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mx-4"> <FaGoogle></FaGoogle>  Google</button>
            <button onClick={handleGitSignIn} className="btn btn-outline btn-primary mx-4"> <FaGithub></FaGithub> Github</button>   
            </div>
            
        </div>
    );
};

export default Sidebar;