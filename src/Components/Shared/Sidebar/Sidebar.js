import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Sidebar = () => {

    const [tutorials, setTutorials]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/recipe-tutorials')
        .then(res => res.json())
        .then(data => setTutorials(data));
    },[])


    return (
        <div>
            <h2>these are all categories {tutorials.length}</h2>
            {
                tutorials.map(tutorial => <p key={tutorial.id}>
                    <Link to={`/courses/${tutorial.id}`} >{tutorial.name}</Link>
                </p> )
            }
            <div className='flex-lg justify-center mt-8'>
             <button className="btn btn-outline btn-primary mx-4"> <FaGoogle></FaGoogle>  Google</button>
            <button className="btn btn-outline btn-primary mx-4"> <FaGithub></FaGithub> Github</button>   
            </div>
            
        </div>
    );
};

export default Sidebar;