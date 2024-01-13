import React, { useEffect } from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import animation from "../../assets/up.json";
import Lottie from 'lottie-react';

const Footer = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='relative'>
            <div className='bg-[#070707] mt-32 py-24'>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='max-w-[1244px] mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10'>
                    <div>
                        <div className=" uppercase text-2xl md:text-3xl font-bold text-white">PA<span className='text-[#C9F31D]'>PP</span>U.</div>
                        <p className='text-[#A7A7A7] font-semibold'>Parvej Hasan Pappu</p>
                        <p className='text-[#A7A7A7] font-semibold'>MERN Stack Developer | Building Next-Level Web Solutions</p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold  text-[#C9F31D] uppercase'>Quick Link</p>
                        <ul className='flex gap-5  mt-8'>
                            <li>
                                <Link to='home' className='text-[#A7A7A7] font-semibold'>Home</Link>
                            </li>
                            <li>
                                <Link to='services' className='text-[#A7A7A7] font-semibold'>Service</Link>
                            </li>
                            <li>
                                <Link to='about' className='text-[#A7A7A7] font-semibold'>About</Link>
                            </li>
                            <li>
                                <Link to='skill' className='text-[#A7A7A7] font-semibold'>Skill</Link>
                            </li>
                            <li>
                                <Link to='contact' className='text-[#A7A7A7] font-semibold'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='text-xl '>
                        <h3 className="text-2xl font-semibold  text-[#C9F31D] uppercase">Address</h3>
                        <p className='text-[#A7A7A7] font-semibold my-4'>Dhaka , Bangladesh</p>
                        <div className='flex items-center gap-4 my-4'>
                            <div className='text-[#C9F31D]'>
                                <FaEnvelope></FaEnvelope>
                            </div>
                            <p className='text-[#A7A7A7] font-semibold'>parvejhasanpappu100@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4 '>
                            <div className='text-[#C9F31D]'>
                                <FaPhoneAlt></FaPhoneAlt>
                            </div>
                            <p className='text-[#A7A7A7] font-semibold'>01974190770 (What's Up , Telegram) <br /> 01608190770</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-8 max-w-[1244px] mx-auto px-4  flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between'>
                <div className="  font-semibold text-[#A7A7A7]">Copyright @2023, <span className='text-[#C9F31D]'>PAPPU.</span> All Rights Reserved</div>
                <div className=' flex gap-4 items-center'>
                    <a href="" className='text-[#A7A7A7] hover:text-white font-semibold duration-500'>Facebook</a>
                    <a href="" className='text-[#A7A7A7] hover:text-white font-semibold duration-500'>Upwork</a>
                    <a href="" className='text-[#A7A7A7] hover:text-white font-semibold duration-500'>Fiverr</a>
                    <a href="" className='text-[#A7A7A7] hover:text-white font-semibold duration-500'>Linkedin</a>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to='home' className='absolute bottom-32 md:bottom-16'>
                    <button className='bg-[#C9F31D] w-[60px] h-[60px] flex items-center justify-center rounded-3xl text-black'>
                        <Lottie className='w-10' animationData={animation} loop={true}></Lottie>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Footer;