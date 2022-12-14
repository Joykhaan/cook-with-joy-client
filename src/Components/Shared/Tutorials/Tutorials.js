import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tutorialcard from '../TutorialCard/Tutorialcard';

const Tutorials = () => {
    const tutorials = useLoaderData();

    return (
        <div>
            <h2 className='font-bold text-2xl text-orange-500 flex justify-center'>Total {tutorials.length} tutorials available</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  content-center lg:grid-cols-3 gap-4 '>

                {
                    tutorials.map(tutorial => <Tutorialcard
                        key={tutorial._id}
                        tutorial={tutorial}
                    ></Tutorialcard>)
                }
            </div>
        </div>

    );
};

export default Tutorials;