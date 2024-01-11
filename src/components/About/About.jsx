import React from 'react';
import { FaPhone, FaRegCheckSquare, FaRegEnvelope } from 'react-icons/fa';
import aboutPic from "../../assets/images/about.png";

const About = () => {
    return (
        <div className='px-4'>
            <div className='lg:container mx-auto bg-[#070707] p-5 lg:p-16 rounded-lg'>
                <p className='text-[#A7A7A7] font-semibold text-xl'>About Me</p>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-24'>
                    <div className=''>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white '>Turning Ideas into Digital Realities: Your <span className='text-[#C9F31D]'>Web Development</span> Partner</h3>
                        <p className='text-[#A7A7A7] font-semibold mt-12'>Hello, I'm a versatile MERN stack developer with a passion for crafting extraordinary web experiences. I excel in frontend and backend development, creating captivating user interfaces and robust server-side functionality. With expertise in HTML, CSS, and JavaScript, I build visually stunning and responsive websites. Let's collaborate to bring your vision to life and make an impact in the digital realm</p>
                        <div className='flex flex-col md:flex-row  md:gap-16 mt-12'>
                            <div>
                                <div className='flex gap-3 items-center text-white'>
                                    <FaRegCheckSquare className='text-[#C9F31D]'></FaRegCheckSquare>
                                    <h5>Extensive MERN Stack Proficiency</h5>
                                </div>
                                <div className='flex gap-3 items-center text-white'>
                                    <FaRegCheckSquare className='text-[#C9F31D]'></FaRegCheckSquare>
                                    <h5>Creative Front-End Expertise</h5>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-3 items-center text-white'>
                                    <FaRegCheckSquare className='text-[#C9F31D]'></FaRegCheckSquare>
                                    <h5>React.js Specialist</h5>
                                </div>
                                <div className='flex gap-3 items-center text-white'>
                                    <FaRegCheckSquare className='text-[#C9F31D]'></FaRegCheckSquare>
                                    <h5>Custom Web Application Development</h5>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#1F1F1F] py-4 px-3 lg:px-8 rounded-2xl border border-gray-600 mt-12 flex flex-col md:flex-row gap-8 md:gap-0 justify-between'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black'>
                                    <FaRegEnvelope />
                                </div>
                                <div>
                                    <p className='text-[#A7A7A7] font-semibold'>Email Me</p>
                                    <p className='text-white font-semibold'>parvejhasanpappu100@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black'>
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className='text-[#A7A7A7] font-semibold'>Make A Call</p>
                                    <p className='text-white font-semibold'>+880 1974190770</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img src={aboutPic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;