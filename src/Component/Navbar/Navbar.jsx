

/* eslint-disable jsx-a11y/alt-text */
'use client'
import React, { useState } from 'react';
import logo from "../../../public/images.png";
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='  mx-auto flex justify-center bg-[rgb(213,224,237)]'>
            <div className=' top-3 md:w-[800px]'>
                <div className=" hidden md:block bg-[rgb(213,224,237)] ">
                    <div className='flex md:justify-between py-4 md:py-4 md:px-6'>
                        <div>
                            <div className=" invisible md:visible md:flex items-center gap-4 text-xl text-sync-400">
                                <span className="  text-1xl md:text-5xl ms-4 me-10 font-signature ml-2 text-blue-400">Rezaul</span>
                            </div>
                        </div>
                        <div className=' md:flex md:space-x-4 mt-4'>
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/blogs">Blog</Link>
                        </div>

                    </div>
                </div>
                <div className='md:hidden'>
                    <div className=" ">


                        <div className="fixed md:hidden md:text-[14px] top-0 h-[50px] md:h-[35px] flex  
md:border   font-semibold z-50 left-0 w-full md:w-[90px] md:relative p-2  bg-[rgb(213,224,237)] md:bg-transparent  ">
                            <div className='-mt-4'>
                                <div className="  md:flex items-center ">
                                    <span className="  text-4xl mt-8  ms-4 me-10 font-signature ml-2 text-blue-400">Rezaul</span>
                                </div>
                            </div>
                            <div onClick={handleToggle} className="-mr-2 flex fixed top-0 z-50 right-0 w-full">
                                {isOpen ? (
                                    <button className="w-[50px] flex justify-center items-center absolute top-0 right-0 h-[50px] text-white bg-black">
                                        <FaTimes className="text-2xl" />
                                    </button>
                                ) : (
                                    <button className="w-[50px] flex justify-center items-center absolute top-0 right-0 h-[50px] bg-black text-white">
                                        <FaBars className="text-white text-2xl" />
                                    </button>
                                )}
                            </div>

                            {isOpen && (
                                <div className="md:hidden">
                                    <div className="w-[25%] bg-base-200 fixed top-10 right-0  mb-[56px] shadow-2xl shadow-gray-300 max-h-fit m-2 rounded-lg">
                                        <div className="border-b border-gray-400 pb-5 pt-2 px-6">
                                            <ul>
                                                <li>
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link href="/about">About</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs">Blog</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;


