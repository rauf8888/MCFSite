import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

const Hero = () => {
    return (
        <>
    <div className="hero h-screen bg-white" id='hero'>
        <div>
            <NavBar />
        </div>
        
        <div className="flex items-center justify-center h-full mx-4 p-2 md:p-12" data-aos="zoom-in">
            <div className="flex flex-col lg:flex-row py-16 justify-center text-center w-full">
                <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                    <h1 className="mb-5 md:text-6xl text-4xl font-bold" style={{ color: '#40649c' }}>
                    Over 45+ Years of Excellence in Metal Cabinet Manufacturing
                    </h1>
                    <div className="text-2xl font-semibold tracking-tight mb-5" style={{ color: 'grey' }}>
                    Delivering Custom Fabrication Solutions with Unmatched Expertise.
                    </div>
                    <div className="flex justify-center mb-4 space-x-0 md:space-x-2 md:mb-8">
                    <Link to="/contact" className="text-[#40649c] border border-[#40649c] bg-white transition-all duration-300 ease-in-out hover:bg-[#40649c] hover:text-white inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                        Get a Quote
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

    

    )
}

export default Hero;