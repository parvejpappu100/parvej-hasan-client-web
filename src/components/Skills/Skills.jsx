import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import ResumePDF from "../../assets/resume/Resume of Parvej Hasan.pdf";
import figma from "../../assets/images/skills/figma.png";

const Skills = () => {
    return (
        <div className=''>
            <div className='lg:container mx-auto  rounded-lg bg-[#070707]'>
                <div className='max-w-[1244px] mx-auto px-4 py-10 lg:py-24 flex gap-12 lg:gap-24 flex-col lg:flex-row'>
                    <div className='max-w-[500px]'>
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
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5'>
                        <div className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img src={figma} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>MongoDB</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-5 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                        <div className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img src={figma} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Express</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-5 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                        <div className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img src={figma} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>React</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-5 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                        <div className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img src={figma} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Node</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-5 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                        <div className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img src={figma} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>NextJS</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-5 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                        <div className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img src={figma} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Tailwind</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-5 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                        <div className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img src={figma} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Bootstrap</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-5 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                        <div className='bg-[#1F1F1F] p-4 flex flex-col items-center rounded-2xl border border-gray-700  hover:border-[#C9F31D] duration-500'>
                            <img src={figma} alt="" />
                            <p className='text-white font-semibold my-3 text-xl'>Firebase</p>
                            <h3 className='bg-[#070707] hover:bg-[#C9F31D] duration-500 px-5 py-2 rounded-lg text-xl text-[#A7A7A7] hover:text-black font-semibold'>90%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;