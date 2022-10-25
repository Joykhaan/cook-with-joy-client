import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const tutorials = useLoaderData()
    return (
        <div>
            <h1>this is courses page: {tutorials.length}</h1>
        </div>
    );
};

export default Courses;