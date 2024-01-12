import React, { useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import ResumePDF from "../../assets/resume/Resume of Parvej Hasan.pdf";
import figma from "../../assets/images/skills/figma.png";
import mongoDB from "../../assets/images/skills/mongodb.png";
import express from "../../assets/images/skills/express.png";
import node from "../../assets/images/skills/node.png";
import react from "../../assets/images/skills/react.png";
import next from "../../assets/images/skills/next.png";
import tailwind from "../../assets/images/skills/tailwind.png";
import firebase from "../../assets/images/skills/firebase.png";
import bootstrap from "../../assets/images/skills/bootstrap.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className=''>
            <div className='lg:container mx-auto  rounded-lg bg-[#070707]'>
                <div className='max-w-[1244px] mx-auto px-4 py-10 lg:py-24 flex gap-12 lg:gap-16 flex-col lg:flex-row'>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='max-w-[480px]'>
                        <p className='text-[#A7A7A7] font-semibold'>My Skills</p>
                        <h3 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl mt-5'>Let’s Explore Popular <span className='text-[#C9F31D]'>Skills & Experience</span></h3>
                        <p className='text-[#A7A7A7] font-semibold my-8'>Experienced MERN stack developer with expertise in building end-to-end web applications. Skilled in React.js for dynamic interfaces, Node.js and Express.js for robust server-side development, and MongoDB for efficient data management. Committed to staying current with industry trends to deliver top-notch solutions. Let's turn ideas into innovative web applications!</p>
                        <a href={ResumePDF}
                            download="Resume of Parvej Hasan Pappu"
                            target="_blank"
                            rel="noreferrer">
                            <button className='bg-[#C9F31D] text-black px-2 lg:px-5 py-2 rounded-xl  font-semibold flex items-center gap-1 hover:gap-2 duration-500'>Download Resume <FaAngleRight className='mt-1' /></button>
                        </a>
                    </div>
                    <div  className='w-full grid grid-cols-2 md:grid-cols-4 gap-5'>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[rgb(201,243,29)] duration-500 '>
                            <img className='h-[55px]' src={mongoDB} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>MongoDB</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-8 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>80%</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img className='h-[55px]' src={express} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Express</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-8 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>85%</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img className='h-[55px]' src={react} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>React</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-8 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>95%</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img className='h-[55px]' src={node} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Node</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-8 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>70%</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img className='h-[55px]' src={next} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>NextJS</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-8 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img className='h-[55px]' src={tailwind} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Tailwind</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-8 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>95%</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img className='h-[55px]' src={bootstrap} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Bootstrap</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-8 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>80%</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img className='h-[55px]' src={firebase} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Firebase</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-8 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>75%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;