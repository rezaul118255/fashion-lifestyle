// /* eslint-disable jsx-a11y/alt-text */
// 'use client'
// import React, { useState } from 'react';
// import logo from "../../../public/images.png"
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaBars, FaTimes } from "react-icons/fa";
// const Navbar = () => {


//     const [isOpen, setIsOpen] = useState(false);
//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className='relative mb-32   mx-auto flex justify-center'>
//             <div className='fixed top-3 md:w-[800px]'>
//                 <div className="flex justify-end md:justify-between py-4 ">
//                     <div>
//                         <Image className='w-32 h-12' src={logo} />
//                     </div>
//                     <div className='invisible md:visible'>
//                         <ul>
//                             <Link href="/"> Home</Link>
//                             <Link href="/"> About </Link>
//                             <Link href="/"> Blog</Link>
//                         </ul>
//                         <ul className=" gap-4">

//                             <li className="fixed md:hidden md:text-[14px] bottom-0 h-[50px] md:h-[35px] flex items-center justify-center
// md:border   font-semibold z-50 left-0 w-full md:w-[90px] md:relative p-2 md:border-[#f72637]  bg-[rgb(38,136,247)] md:bg-transparent hover:text-white duration-500 ">


//                             </li>

//                         </ul>
//                     </div>

//                     <div className='md:hidden'>
//                         <div onClick={() => handleToggle(!isOpen)}
//                             className="-mr-2 flex fixed top-0 z-50 right-0  md:hidden">
//                             {isOpen ? (
//                                 <button className="w-[50px] flex justify-center items-center absolute top-0 right-0 h-[50px] text-white bg-black">
//                                     <FaTimes className="text-2xl"></FaTimes>
//                                 </button>
//                             ) : (
//                                 <button className="w-[50px] flex justify-center items-center absolute top-0 right-0 h-[50px] bg-black text-white">
//                                     <FaBars className="text-white text-2xl"></FaBars>
//                                 </button>
//                             )}
//                         </div>

//                         {
//                             isOpen && (
//                                 <div className="md:hidden">

//                                     <div className="w-[40%] bg-base-200 fixed top-0 right-0 z-50 mb-[56px] shadow-2xl shadow-gray-300 max-h-fit m-2 rounded-lg ">


//                                         <div className="border-b border-gray-400 pb-5 pt-2">
//                                             <ul>
//                                                 <Link to="home">
//                                                     Home
//                                                 </Link>

//                                                 <Link to="about" >
//                                                     About

//                                                 </Link>


//                                                 <Link to="Blog" >
//                                                     Services

//                                                 </Link>

//                                             </ul>
//                                         </div>

//                                     </div>
//                                 </div>
//                             )
//                         }
//                     </div>

//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



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
        <nav className='  mx-auto flex justify-center'>
            <div className=' top-3 md:w-[800px]'>
                <div className=" flex  md:justify-between py-4 md:py-4 md:px-6">
                    <div>
                        <Image src={logo} alt="Logo" width={128} height={48} />
                    </div>
                    <div className='hidden md:block md:flex md:space-x-4 mt-4'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blog</Link>
                    </div>

                </div>
                <div className='md:hidden'>
                    <div onClick={handleToggle} className="-mr-2 flex fixed top-5 z-50 right-0 w-full">
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
                                            <Link href="/blog">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


