import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-4">
    
                {/* Top area: Blocks */}
                <div className="grid sm:grid-cols-12 gap-5 py-4 md:py-6 border-t border-gray-200 lg:ml-11">
    
                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
                        <div className="box-border border-b-4 border-blue-900 p-4 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-2xl mb-2">Metal Cabinet Fabricators</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <p>3/55 Sivanandhapuram, Saravanampatti,</p>
                                <p>Coimbatore, Tamil Nadu</p>
                                <p>India - 641035.</p>
                                <p>GST No. - 33AFOPA7906G3ZJ </p>
                            </div>
                        </div>
                    </div>
    
                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 mx-auto">
                        <h6 className="text-[#013289] text-lg font-bold mb-2">LINKS</h6>
                        <ul className="text-md">
                            <li className="mb-1">
                                <HashLink to="#" className="text-[#40649c] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                            </li>
                            <li className="mb-1">
                                <HashLink to="#" className="text-[#40649c] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                            </li>
                            <li className="mb-1">
                                <HashLink to="#" className="text-[#40649c] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                            </li>
                        </ul>
                    </div>
    
                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-lg font-bold mb-2">Additional Details</h6>
                        <ul className="text-md">
                            <li className="mb-1">
                            <a  href="https://maps.app.goo.gl/66QVZ5c7kTc1CByb8" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#40649c] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                Map Location
                            </a>
                            </li>
                            <li className="mb-1">
                                <Link to="#" className="text-[#40649c] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">ISO Certification</Link>
                            </li>
                            <li className="mb-1">
                                <Link to="#" className="text-[#40649c] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Brochure</Link>
                            </li>
                        </ul>
                    </div>
    
                </div>
    
                <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                        <div className="text-sm text-gray-200 font-semibold py-1">
                            <HashLink
                                to="#"
                                className="hover:text-[#40649c]">
                                Metal Cabinet Fabricators
                            </HashLink>
                            <p className="text-xs">All rights reserved.</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </footer>
    </>
    
    )
}
export default Footer;
