import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("testimonial.json")
            .then(res => res.json())
            .then(data => setTestimonials(data))
        AOS.init();
    }, [])

    return (
        <div className=''>
            <div className='lg:container mx-auto  rounded-lg bg-[#070707]'>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='max-w-[1244px] mx-auto px-4 py-10 lg:py-32 flex gap-12 lg:gap-16 flex-col lg:flex-row'>
                    <div className='max-w-[480px]'>
                        <p className='text-[#A7A7A7] font-semibold'>Clients Testimonials</p>
                        <h3 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl mt-5'>Let’s Explore what my  <span className='text-[#C9F31D]'>Client</span> says</h3>
                        <p className='text-[#A7A7A7] font-semibold my-8'>I have worked with many clients in the marketplace and outside the marketplace. And these clients are 100% happy with my work. They gave me their valuable feedback which motivates me for my work.</p>
                    </div>
                    <div className=''>
                        <div  className='text-white max-w-3xl mx-auto'>
                            <Swiper
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                                slidesPerView={1}
                                spaceBetween={10}

                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {
                                    testimonials?.map(review => <SwiperSlide 
                                        className=' text-center border border-[#212124]  p-7 rounded-lg bg-[#070707] hover:bg-[#131313] duration-1000 shadow'
                                        key={review._id}
                                    >
                                        <div className='flex flex-col items-center h-[330px]'>
                                            <div className='flex mb-7'>
                                                <label className="bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black">
                                                    <FaQuoteLeft></FaQuoteLeft>
                                                </label>
                                                <img className='w-[70px] h-[70px] rounded-full' src={review.img} alt="" />
                                            </div>
                                            <p className='text-[#A7A7A7] font-semibold'>{review.details}</p>
                                            <h3 className='text-white text-2xl font-semibold mt-4 mb-1'>{review.name}</h3>
                                            <p className='text-[#C9F31D]'>{review.from}</p>
                                        </div>
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;