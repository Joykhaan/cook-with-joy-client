import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tutorials = () => {
    const tutorials = useLoaderData();

    return (
        <div>
            <h2>total tutorials are{tutorials.length}</h2>
        </div>
    );
};

export default Tutorials;