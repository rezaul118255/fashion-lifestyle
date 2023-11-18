import Image from 'next/image';
import React from 'react';
import './page.css';

import banner from '../../../public/banner2.jpg';

const page = () => {
    return (
        <div className=' '>
            <div className='relative'>
                <div>
                    <Image className='w-full h-screen' src={banner} />
                </div>
                <div className=' absolute -mt-[600px] ms:20 md:ms-32'>
                    <h1 className='text-5xl py-16 text-white'>Blog!</h1>
                    <div>
                        <Image className=' md:w-[520px] md:h-[300px] ' src={banner}></Image>
                        <div className='bg-[#cea579] w-[520px] '>
                            <div className='ms-8'>
                                <h1 className='py-4 text-2xl'>Street Shopping Tips</h1>
                                <h1 className=''>March 14, 2019</h1>
                                <h1 className='mt-2'>Nullam imperdiet lobortis maximus cras ante neque. Aenean fermentum vulputate eros, efficitur…</h1>
                                <div className='py-4'>
                                    <button className='btn btn-outline'>Read More</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




            <header className="text-black relative flex justify-center items-center mt-48">

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

                    </div>
                </div>
                <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox=" -300 5 950 270"
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

        </div>
    );
};

export default page;