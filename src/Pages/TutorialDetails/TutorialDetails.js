import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const TutorialDetails = () => {
    const tutdetails = useLoaderData();

    return (
        <>
            <h2 className='flex justify-center text-3xl text-orange-500 mb-6'>Enroll our special courses || for more info click here

                <Pdf targetRef={ref} filename="cook-tutorial.pdf" >
                    {({ toPdf }) => <button onClick={toPdf}><FaCloudDownloadAlt className="ml-4 mt-2"></FaCloudDownloadAlt></button>}
                </Pdf>  </h2>

            <div className='flex justify-center'  ref={ref}>
                
                <div className="card w-full md:w-1/2 bg-base-100 shadow-xl "  >
                    <figure><img src={tutdetails.image} className='w-full h-96' alt="Shoes" /></figure>
                    <div className="card-body"  >
                        <div ><h2 className="card-title"> {tutdetails.title} </h2>
                            <p>{tutdetails.details}</p></div>

                        <div className="card-actions justify-end">
                            <Link to={`/tutorial/${tutdetails._id}/${tutdetails.title}/checkout`} ><button className="btn btn-outline btn-secondary"> get premium access </button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default TutorialDetails;