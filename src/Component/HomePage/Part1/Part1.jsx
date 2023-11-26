/* eslint-disable jsx-a11y/alt-text */

import React from 'react';

import './Part1.css';

const Part1 = () => {
    return (
        <div>

            <div className="featured-item bg-fixed  text-white bg-[rgb(213,224,237)]">



                <div className=" w-full  h-screen container">




                    <div className=" flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#272626] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 '>
                            <p className='text-5xl font-bold'>Let’s Create Your…</p>
                            <h1 className='text-2xl md:text-8xl '>Own Style with <br /> K.A.R.A.!</h1>
                            <div className='flex gap-6'>
                                <button className="btn  hover:bg-white  mr-5">Read more</button>
                                <button className=" ">Watch video</button>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div className='  pl-12 py-32 space-y-6 bg-[rgb(213,224,237)] '>
                <h1 className='text-2xl '>Great Style For Everyone</h1>
                <h1 className='text-5xl '>I Love to Help People Feel Great </h1>
                <h1 className='text-5xl '> about How They Look.</h1>




            </div>








        </div>
    );
};

export default Part1;