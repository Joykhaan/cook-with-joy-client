import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Tutorialcard from '../../Components/Shared/TutorialCard/Tutorialcard';

const TutorialDetails = () => {
    const tutdetails = useLoaderData();
    return (
        <div className='flex justify-center'>
            <div className="card w-1/2 bg-base-100 shadow-xl ">
                <figure><img src={tutdetails.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {tutdetails.name} </h2>
                    <p>{tutdetails.details}</p>
                    <div className="card-actions justify-end">
                         <button className="btn btn-outline btn-secondary"> <Link to={`tutorial/${tutdetails.title}`} >get premium access</Link> </button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default TutorialDetails;