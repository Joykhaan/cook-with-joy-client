import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className='flex justify-center'> 

            <div className='md:w-1/2 mx-4 md:mx-0'>
            <div className='my-12'>
             <h1 className='text-orange-500 text-3xl'>what is cors?</h1>
            <p className='text-slate-100 mt-4 text-lg' id='sidetxt'>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>   
            </div>

            <div className='my-12'>
             <h1 className='text-orange-500 text-3xl'>Why are you using firebase? What other options do you have to implement authentication?</h1>
             <h2 className='text-xl text-orange-300 font-bold mt-4'>The reason of using firebase:</h2>
            <p className='text-slate-100 text-lg' id='sidetxt'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            <h2 className='text-xl text-orange-300 font-bold '>Other options to implement authentication:</h2>   
            <p className='text-slate-100 text-lg' id='sidetxt'>Auth0, MongoDB, Passport, Okta are the most popular alternatives and competitors to Firebase Authentication.</p>
            </div>

            <div className='my-12'>
             <h1 className='text-orange-500 text-3xl'>How does the private route work?</h1>
            <p className='text-slate-100 mt-4 text-lg' id='sidetxt'>Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.</p>   
            </div>

            <div className='my-12'>
             <h1 className='text-orange-500 text-3xl'>What is Node? How does Node work?</h1>
             <h2 className='text-xl text-orange-300 font-bold mt-4'>Node is:</h2>
            <p className='text-slate-100 text-lg' id='sidetxt'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>   
            <h2 className='text-xl text-orange-300 font-bold'>Node work:</h2>
            <p className='text-slate-100 text-lg'  id='sidetxt'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
            </div>
            
            
           </div>
        </div>
    );
};

export default Blog;