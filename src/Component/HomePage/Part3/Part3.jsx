/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Part3.css';
import Image from 'next/image';
import part3 from '../../../../public/part1.jpg';

import Logo1 from '../../../../public/logo-1.png';
import Logo2 from '../../../../public/logo-2.png';
import Logo3 from '../../../../public/logo-3.png';
import Logo4 from '../../../../public/logo-4.png';
import Logo5 from '../../../../public/logo-5.png';
import Logo6 from '../../../../public/logo (3).png';

import card1 from '../../../../public/Fashion1.jpg';
import card2 from '../../../../public/lifestyle2.jpg';
import Marquee from "react-fast-marquee";

const Part3 = () => {
    return (
        <div className="">

            <header className="text-black relative flex justify-center items-center pt-48">
                <div className="absolute mb-48">
                    <div className='text-center'>
                        <p className="text-2xl font-bold inline border-b-4 border-orange-500">
                            Testimonials
                        </p>
                        <p className="text-4xl mt-4">My Happy Clients!</p>
                        <p className='mt-4'>
                            Aliquip quae scipit eros. Anim commodi maiores pharetra, arcu
                            incidunt, omnis iste <br /> incidunt cursus. Officia ea numquam
                            vivamus repellen. Minus fermentum litora.
                        </p>
                        <div className="avatar mt-4">
                            <div className="w-24 rounded-full">
                                <Image src={part3} />
                            </div>
                        </div>
                    </div>
                </div>
                <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-300 0 950 270"
                >
                    <path
                        d="M-314,267 C105,364 400,100 812,279"
                        fill="none"
                        stroke="white"
                        stroke-width="120"
                        stroke-linecap="round"
                    />
                    <h1>text</h1>
                </svg>
            </header>
            {/* Logo section */}

            <div className='w-full  '>
                <div className=''>
                    <div className='w-52 mx-auto text-center font-medium'>
                        <h3 className='border-b-2 border-[#f60014] pb-4'>BRANDS THAT TRUST US</h3>
                    </div>

                    <Marquee className='w-full gap-10 mt-16 grid grid-cols-3 lg:grid-cols-6  justify-items-center items-center  container mx-auto'>
                        <div>

                            <Image
                                src={Logo1}
                                alt="Image"
                                className='w-28 mx-10 h-auto '
                            />
                        </div>
                        <div>
                            <Image
                                src={Logo2}
                                alt="Image"
                                className='w-28 mx-10 h-auto '
                            />
                        </div>
                        <div>
                            <Image
                                src={Logo3}
                                alt="Image"
                                className='w-28 mx-10 h-auto '
                            />
                        </div>
                        <div>
                            <Image
                                src={Logo4}
                                alt="Image"
                                className='w-28 mx-10 h-auto '
                            />
                        </div>
                        <div>
                            <Image
                                src={Logo5}
                                alt="Image"
                                className='w-28 mx-10 h-auto '
                            />
                        </div>
                        <div>
                            <Image
                                src={Logo6}
                                alt="Image"
                                className='w-28 mx-10 h-auto '
                            /></div>

                    </Marquee>

                </div>




            </div>
            <div className='bg-white grid grid-cols-1 md:grid-cols-3 gap-8 mt-8  py-12'>


                <div className='bg-purple-500 ms-6 md:ms-12'>
                    <p className='text-5xl ms-4 pt-24'>Area of <br /> Expertise!</p>
                    <div tabIndex={0} className="bg-purple-500 collapse collapse-arrow mt-12 ">

                        <div className="collapse-title text-xl font-medium">
                            Style
                        </div>
                        <div className="collapse-content">
                            <p> Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.</p>
                        </div>



                    </div>
                    <div tabIndex={0} className="bg-purple-500 collapse collapse-arrow">

                        <div className="collapse-title text-xl font-medium">
                            Trending Fashion
                        </div>
                        <div className="collapse-content">
                            <p> Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.</p>
                        </div>



                    </div>
                    <div tabIndex={0} className="bg-purple-500 collapse collapse-arrow">

                        <div className="collapse-title text-xl font-medium">
                            People & Places
                        </div>
                        <div className="collapse-content">
                            <p> Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.</p>
                        </div>



                    </div>
                    <div tabIndex={0} className="bg-purple-500 collapse collapse-arrow">

                        <div className="collapse-title text-xl font-medium">
                            Before-After
                        </div>
                        <div className="collapse-content">
                            <p> I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>



                    </div>


                </div>
                <div className='px-6'>

                    <Image className='h-[300px] w-auto' src={card1} />
                    <p className='text-3xl mt-5  '>Ive Worked with from Big Agencies to New Bloggers.</p>
                    <p className='mt-4 '>Molestiae purus facilisi nonummy soluta nisi odit, ac taciti voluptatibus, eveniet veritatis cubilia magna. Imperdiet.</p>


                    <button className='btn btn-outline mt-6'>Read more</button>
                </div>
                <div className='px-6'>
                    <Image className='h-[300px] w-auto' src={card2} />
                    <p className='text-3xl mt-5'>Ive Worked with from Big Agencies to New Bloggers.</p>
                    <p className='mt-4 '>Molestiae purus facilisi nonummy soluta nisi odit, ac taciti voluptatibus, eveniet veritatis cubilia magna. Imperdiet.</p>


                    <button className='btn btn-outline mt-6'>Read more</button>
                </div>

            </div>



        </div>
    );
};

export default Part3;
