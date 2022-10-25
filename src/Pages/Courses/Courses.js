import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tutorials from '../../Components/Shared/Tutorials/Tutorials';

const Courses = () => {
    const tutorials = useLoaderData()
    return (
        <div>
            <h1>this is courses page: {tutorials.length}</h1>
            <Tutorials></Tutorials>
        </div>
    );
};

export default Courses;