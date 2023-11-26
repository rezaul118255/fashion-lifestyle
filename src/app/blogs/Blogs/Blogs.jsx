/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useEffect, useState } from 'react';


import Image from "next/image";
import '../page.css';
import banner from '../../../../public/carucel1.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-bootstrap/Carousel';



export const getBlogs = async () => {
    const url = '/blog.json';
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log("Fetched user data:", data); // Add this line
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};


const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlogs();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching Finance data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div >
            <div className=' '>
                <div className='relative'>
                    <div>
                        <Image className='w-full h-screen' src={banner} />
                    </div>
                    <div className=' absolute -mt-[600px] ms:20 md:ms-32'>
                        <h1 className='text-5xl py-16 text-white'>Blog!</h1>
                        <div>
                            {/* <Image className=' md:w-[520px] md:h-[300px] ' src={banner}></Image> */}
                            <div className='bg-[#a47f43] w-[520px] '>
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

                <header className="text-black relative flex justify-center items-center mt-48 pt-48">

                    <div className="absolute mb-72">
                        <div className='text-center'>
                            <Carousel>
                                {Blogs && Blogs.map((Blog) => (

                                    <div key={Blog.id}>
                                        {/* <Image width={100} height={100} src={Blog.image} alt="Image" className='h-10 border w-10' /> */}
                                        <h3>{Blog.name}</h3>
                                        <p>{Blog.id}</p>
                                        <p>{Blog.description}</p>
                                        <p>{Blog.data}</p>
                                    </div>
                                ))}
                            </Carousel>

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
                            stroke-linecap=""
                        />
                        <h1>text</h1>
                    </svg>

                </header>

            </div >

        </div >
    );
};

export default Blogs;