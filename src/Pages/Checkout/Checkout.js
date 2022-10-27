import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutDetails = useLoaderData()
    return (
        <div>
            <h1 className='text-4xl text-orange-500 flex justify-center mx-4 md:mx-0 mb-8'>Welcome to Checkout! </h1>
            <h1 className='text-3xl text-orange-500 flex justify-center mx-4 md:mx-0'>Thank you! for feel interested to get premium access </h1>
            <div className='flex justify-center mx-4 md:mx-0 mt-8'>
                <p className='text-xl mt-8 text-slate-50' id='sidetxt'>Get the <span className='font-bold text-orange-500 text-2xl'>{checkoutDetails.title}</span> premium classes for only <span className='font-bold text-orange-500 text-2xl'>$50</span> with lifetime access.</p>
            </div>


            <h2 className='text-3xl text-orange-500 flex justify-center mx-4 md:mx-0 mt-8'>course details:</h2>
            <div className='flex justify-center mx-4 md:mx-0 mb-2'>
                
                <p className='text-xl  text-slate-50' id='sidetxt'>&#9755; {checkoutDetails.title} course will start from <span className='font-bold text-orange-500 text-xl'>December 2022</span> </p>
            </div>
            <div className='flex justify-center mx-4 md:mx-0 mb-2'>
                
                <p className='text-xl  text-slate-50' id='sidetxt'>&#9755; Provide you the detailes and advanced pre recorder class </p>
            </div>
            <div className='flex justify-center mx-4 md:mx-0 mb-2'>
                
                <p className='text-xl  text-slate-50' id='sidetxt'>&#9755; It will be 1 month course </p>
            </div>
            <h2 className='text-3xl text-orange-500 flex justify-center mx-4 md:mx-0 mt-8 mb-4'>Please do the checkout process.</h2>
            <div className='flex justify-center '>

            <button className="btn  bg-orange-600 w-1/5 ">Go to Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;