/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import part2 from '../../../../public/Fashion1.jpg'
import part3 from '../../../../public/lifestyle3.jpg'
import part4 from '../../../../public/Lifestyle4.jpg'
import part5 from '../../../../public/Lifestyle5.jpg'
import part6 from '../../../../public/Fashion1.jpg'
import Image from 'next/image';


const Part2 = () => {
    return (
        <div className=''>
            <div className='bg-[#cea579] flex flex-col md:flex-row h-auto   md:h-[500px]  '>
                <div className='md:w-1/2 flex items-center justify-center '>
                    <Image src={part2} className=" w-[80%] md:w-[60%]  h-[620px] -mt-36 md:-mt-4    " />
                </div>
                <div className=' md:w-1/2   p-8 my-auto'>
                    <h1 className='text-3xl text-white'>Discover Your Personal Style and the <br /> Confidence That Comes with It.</h1>
                    <p className='py-6 '>Tempora aliqua cillum accusamus aperiam pharetra cupidatat fermentum viverra delectus quidem incidunt tempus itaque quam, id blandit dolores, proin reiciendis. Nostrum proin sem veniam veritatis inceptos!</p>
                    <button className='btn mt-8'>Read more</button>
                </div>
            </div>
            <div className=' py-32 '>
                <h1 className='text-center'>Services for All Age Women</h1>
                <p className='text-center text-2xl md:text-6xl py-5'>I Love to Help People Feel <br /> Great about How They Look.</p>
                {/* image section  */}
                <div className='mt-12  flex flex-col md:flex-row gap-8 mx-16'>
                    <div className=' flex items-center justify-center '>
                        <Image src={part3} className=" w-[550px]    h-[450px]    " />
                    </div>
                    <div className=' flex items-center justify-center '>
                        <Image src={part4} className="w-[550px]  h-[550px]    " />
                    </div>
                    <div className=' flex items-center justify-center '>
                        <Image src={part5} className=" w-[550px]  h-[600px]    " />
                    </div>
                    <div className='flex items-center justify-center '>
                        <Image src={part6} className="w-[550px]   h-[450px]    " />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8 mx-16 mt-8'>
                    <div>
                        <h1 className='text-3xl'>
                            <span className='text-orange-500 text-5xl'>01 </span> Wardrobe Styling</h1>
                        <p className='md:ms-16 mt-4'>Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus</p>
                    </div>
                    <div>
                        <h1 className='text-3xl'>
                            <span className='text-orange-500 text-5xl'>02 </span> Wardrobe Styling</h1>
                        <p className='md:ms-16 mt-4'>Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus</p>
                    </div>
                    <div>
                        <h1 className='text-3xl'>
                            <span className='text-orange-500 text-5xl'>03 </span> Wardrobe Styling</h1>
                        <p className='md:ms-16 mt-4'>Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus</p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Part2;