import React from 'react';
import { FaCloudUploadAlt, FaCode, FaCodeBranch, FaServer } from "react-icons/fa";
import { MdBuild, MdWeb } from 'react-icons/md';
import { AiOutlineMobile } from 'react-icons/ai';
import { GiDatabase } from 'react-icons/gi';

const Services = () => {
    return (
        <div className='max-w-[1244px] mx-auto px-4 mt-36 mb-32'>
            <div className='text-center max-w-[800px] mx-auto'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='w-[10px] h-[10px] rounded-full bg-[#C9F31D]'></div>
                    <p className='text-[#A7A7A7] font-semibold'> My Services</p>
                </div>
                <h3 className='text-white font-semibold text-2xl md:text-3xl lg:text-5xl mt-5'>My <span className='text-[#C9F31D]'>Special Service</span> For your Business Development</h3>
            </div>
            <div className='mt-24 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='bg-[#1F1F1F] p-5 border border-gray-700 rounded-xl hover:border-[#C9F31D] duration-500 flex flex-col md:flex-row text-center md:text-start items-center gap-3 hover:shadow-md'>
                    <div>
                        <FaCode className='text-6xl text-[#C9F31D]'></FaCode>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>Full-Stack Web Development</h3>
                        <p className='text-[#A7A7A7] mt-3'>Develop end-to-end web applications using the MERN (MongoDB, Express, React, Node.js) stack, ensuring seamless integration between the frontend and backend.</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-5 border border-gray-700 rounded-xl hover:border-[#C9F31D] duration-500 flex flex-col md:flex-row text-center md:text-start items-center gap-3 hover:shadow-md'>
                    <div>
                        <MdWeb className='text-6xl text-[#C9F31D]'></MdWeb>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>Custom Web Application Development</h3>
                        <p className='text-[#A7A7A7] mt-3'>Build customized web applications tailored to your specific business needs, leveraging the power of the MERN stack to deliver high-performance and scalable solutions.</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-5 border border-gray-700 rounded-xl hover:border-[#C9F31D] duration-500 flex flex-col md:flex-row text-center md:text-start items-center gap-3 hover:shadow-md'>
                    <div>
                        <AiOutlineMobile className='text-6xl text-[#C9F31D]'></AiOutlineMobile>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>Responsive UI/UX Design</h3>
                        <p className='text-[#A7A7A7] mt-3'>Create intuitive and visually appealing user interfaces that adapt smoothly across different devices, providing an exceptional user experience on desktops, tablets, and mobile devices.</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-5 border border-gray-700 rounded-xl hover:border-[#C9F31D] duration-500 flex flex-col md:flex-row text-center md:text-start items-center gap-3 hover:shadow-md'>
                    <div>
                        <FaServer className='text-6xl text-[#C9F31D]'></FaServer>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>RESTful API Development</h3>
                        <p className='text-[#A7A7A7] mt-3'>Design and develop robust APIs using Express and Node.js, allowing smooth communication between your frontend and backend components and enabling seamless data flow.</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-5 border border-gray-700 rounded-xl hover:border-[#C9F31D] duration-500 flex flex-col md:flex-row text-center md:text-start items-center gap-3 hover:shadow-md'>
                    <div>
                        <GiDatabase className='text-6xl text-[#C9F31D]'></GiDatabase>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>Database Integration and Management</h3>
                        <p className='text-[#A7A7A7] mt-3'>Implement MongoDB as the database solution for your web applications, ensuring efficient data storage, retrieval, and management.</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-5 border border-gray-700 rounded-xl hover:border-[#C9F31D] duration-500 flex flex-col md:flex-row text-center md:text-start items-center gap-3 hover:shadow-md'>
                    <div>
                        <FaCodeBranch className='text-6xl text-[#C9F31D]'></FaCodeBranch>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>Third-Party API Integration</h3>
                        <p className='text-[#A7A7A7] mt-3'>Integrate third-party APIs to add additional functionality and enhance the capabilities of your web applications, enabling seamless integration with external services and platforms.</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-5 border border-gray-700 rounded-xl hover:border-[#C9F31D] duration-500 flex flex-col md:flex-row text-center md:text-start items-center gap-3 hover:shadow-md'>
                    <div>
                        <FaCloudUploadAlt className='text-6xl text-[#C9F31D]'></FaCloudUploadAlt>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>Deployment and Hosting</h3>
                        <p className='text-[#A7A7A7] mt-3'>Deploy and host your MERN stack applications on cloud platforms such as Heroku or AWS, ensuring scalability, security, and reliability.</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-5 border border-gray-700 rounded-xl hover:border-[#C9F31D] duration-500 flex flex-col md:flex-row text-center md:text-start items-center gap-3 hover:shadow-md'>
                    <div>
                        <MdBuild className='text-6xl text-[#C9F31D]'></MdBuild>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-bold'>Maintenance and Support</h3>
                        <p className='text-[#A7A7A7] mt-3'>Provide ongoing maintenance, updates, and support for your MERN stack applications, ensuring their smooth operation and addressing any issues that may arise.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;