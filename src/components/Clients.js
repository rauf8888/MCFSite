import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import { Autoplay } from 'swiper/modules';

import kws from '../images/clients/ozo.png';
import geps from '../images/clients/ppg.png';
import protergia from '../images/clients/krish-brindavan.jpg';
import crisp from '../images/clients/crisp.jpg';
import and from '../images/clients/aNd_Labs.png';
import psg from '../images/clients/PSG_College_of_Technology_logo.png';
import sns from '../images/clients/sns-logo.png';
import cheran from '../images/clients/Cheranlogo.80b9f2e54c1a79491cb6.png';
import indus from '../images/clients/indus-weighing.gif';

const Clients = () => {
    const clientImages = [
        { src: kws, alt: "KWS" },
        { src: protergia, alt: "Protergia" },
        { src: geps, alt: "GEPS" },
        { src: crisp, alt: "Crisp" },
        { src: and, alt:"aNd"},
        { src: psg, alt:"psg" },
        { src: sns, alt:"sns"},
        { src: cheran, alt:"cheran" },
        { src: indus, alt:"indus"},
    ];

    return (
        <div className="mt-8 bg-[#40649c]">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-white uppercase font-bold">Our Clients</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-white'></div>
                    </div>
                </div>

                {/* First Row */}
                <div className="p-8" data-aos="fade-in" data-aos-delay="600">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={'auto'}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        loop={true}
                        style={{ width: '100%', padding: '0 2rem' }}
                    >
                        {clientImages.map((image, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }} className="flex justify-center">
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    style={{ height: '5rem', width: '10rem' }} 
                                    className="transition-all ease-in-out opacity-50 hover:opacity-100" 
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
}

export default Clients;
