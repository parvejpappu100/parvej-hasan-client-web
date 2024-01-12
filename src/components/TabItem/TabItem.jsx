import React, { useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import ProjectModal from '../ProjectModal/ProjectModal';


const TabItem = ({ project }) => {

    const { category, name, image } = project;
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className='relative'>
                <div className="relative max-w-full h-[450px] overflow-hidden rounded-md">
                    <div>
                        <img
                            src={image}
                            alt={name}
                            className=" object-cover object-top  rounded-md w-full"
                        />
                    </div>
                </div>
                <div className='bg-black  opacity-0 hover:opacity-60 text-white absolute inset-0 bottom-0  flex justify-center items-center text-center transition-opacity duration-1000 p-5 rounded-md'>
                    <div onClick={() => setShowModal(true)} className='bg-[#C9F31D] w-[50px] h-[50px] flex items-center justify-center rounded-full text-black'>
                        <FaArrowUp className='transform rotate-45' />
                    </div>
                </div>
            </div>
            <div className='mt-8 text-white hover:text-[#C9F31D] duration-500 '>
                <p className='text-xl text-[#C9F31D]'>{category}</p>
                <h3 className='text-2xl mb-3 '>{name}</h3>
            </div>
            <div>
                <ProjectModal project={project} showModal={showModal} setShowModal={setShowModal}></ProjectModal>
            </div>
        </div>
    );
};

export default TabItem;