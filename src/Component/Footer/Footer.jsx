import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className='flex items-center justify-center   mx-auto Footer bg-fixed bg-slate-500 bg-opacity-60 h-[300px] w-full text-center  '>

                <div>
                    <p className="text-2xl font-bold inline border-b-4 border-orange-500">
                        Testimonials
                    </p>

                    <h1 className='text-4xl mt-6'>Consultations Are Free! </h1>
                    <p className='text-xl mt-6'>Platea proident! Aute, rerum sociosqu numquam placerat, rerum molestias doloribus incidunt occaecati placeat, <br /> repellendus mus optio, totam cons.</p>

                    <button className='btn btn-outline mt-8'> lets get started</button>
                </div>


            </div>
            <div className='bg-black text-white  py-6 flex items-center justify-around container w-full'>
                <div>
                    <p>Copyright © 2023 Fashion Lifestyle Blog</p>
                </div>
                <div className='gap-12'>
                    <a href="">Home</a>
                    <a href="">About </a>
                    <a href="">Blog </a>
                </div>
            </div>

        </div>


    );
};

export default Footer;