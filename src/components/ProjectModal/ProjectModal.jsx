import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectModal = ({ project, showModal, setShowModal }) => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    const { category, name, details, image, technology, client_link, server_link, live_link } = project;

    return (
        <div>
            {showModal ? (
                <>
                    <div  data-aos="zoom-in-down" data-aos-duration="500" data-aos-delay="500"
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none scale-90 "
                    >
                        <div className="relative w-auto mt-12  mx-auto max-w-6xl">
                            {/*content*/}
                            <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-[#131313] outline-none focus:outline-none border border-[#C9F31D]">
                                {/*body*/}
                                <div className="relative flex-auto">
                                    <div className='flex flex-col lg:flex-row gap-5 my-12 px-4'>
                                        <div className=' w-full flex justify-center items-center'>
                                            <div className="relative max-w-full h-[450px] lg:h-[600px] overflow-hidden ">
                                                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                                    <img
                                                        src={image}
                                                        alt={name}
                                                        className="w-[450px]  object-cover object-top border"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full text-[#A7A7A7]'>
                                            <h5><strong className='text-[#C9F31D]'>Project Info :</strong> {details}</h5>
                                            <h4 className=' my-5 font-semibold text-[#C9F31D] text-2xl'>Project Details:</h4>
                                            <h3><strong>Category :</strong> {category}</h3>
                                            <p><strong>Technology :</strong> {technology}</p>
                                            <p><strong>Client Link :</strong> <a className='underline' href={client_link}>{client_link}</a></p>
                                            <p><strong>Server Link :</strong> <a className='underline' href={server_link ? server_link : "#"}>{server_link ? server_link : "No Server"}</a></p>
                                            <p><strong>Live Link :</strong> <a className='text-[#C9F31D] font-semibold' href={live_link}>{live_link}</a></p>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" fixed inset-0 z-40 "></div>
                </>
            ) : null}
        </div>
    );
};

export default ProjectModal;