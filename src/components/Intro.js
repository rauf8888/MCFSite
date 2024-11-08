// import React from 'react';
import React, { useState, useEffect } from 'react';
import img from '../images/About-Cabinet.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; 
import img1 from '../images/About-Cabinet2.png'; 
import img2 from '../images/About-cabinet3.png';
// import img3 from '../images/your-image-3.jpg';
// import img4 from '../images/your-image-4.jpg';



const Intro = () => {
    const images = [img, img1, img2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="w-full bg-[#40649c] py-12" id='about'>
            <div className="max-w-6xl m-auto p-2 md:p-12 flex flex-col lg:flex-row items-center">
                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-full h-96 overflow-hidden">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`image-${index}`}
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 rounded-mg ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Text Section */}
                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="fade-up">
                    <h3 className="text-3xl text-white font-bold mb-4">METAL CABINET FABRICATORS</h3>
                    <div>
                        <p className='my-3 text-xl text-white'>We have over 45+ years of experience in custom sheet metal fabrication, committed to delivering durable and innovative metal solutions tailored to each client's unique requirements. Our skilled team of professionals emphasizes exceptional craftsmanship and meticulous attention to detail, ensuring that every project not only meets but exceeds industry standards.</p>
                    </div>
                    <div>
                        <p className='my-3 text-xl text-white'>We prioritize craftsmanship and customer satisfaction, collaborating closely to bring your vision to life. Experience the difference with Metal Cabinet Fabricators—where quality and reliability meet excellence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;