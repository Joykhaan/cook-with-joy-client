import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TutorialDetails = () => {
    const tutdetails = useLoaderData();
    return (
        <div>
            <h2>this is tutorial details {tutdetails.title}</h2>
        </div>
    );
};

export default TutorialDetails;