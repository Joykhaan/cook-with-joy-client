import React from 'react';
import { Link } from 'react-router-dom';

const Tutorialcard = ({ tutorial }) => {

    const { title, image, details,_id } = tutorial

    return (
        <div className='flex justify-around mt-6'>
            
            <div className="card lg:w-80 md:w-64  bg-base-100 shadow-xl">
                <figure><img className='h-64 w-full md:w-80' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-500">{title}</h2>
                    
                    {
                        details.length>200?<p>{ details.slice(0,200)+'....'} <Link className='text-lg font-bold text-orange-500' to={`tutorial/${_id}`} > read more</Link> </p>: <p>{details}</p>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Tutorialcard;