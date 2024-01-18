import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaAngleRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import myPhoto from "../../assets/images/me.png";
import ResumePDF from "../../assets/resume/Resume of Parvej Hasan.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';
import animation from "../../assets/scroll.json";
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='bg-[#131313] pt-24 lg:pt-36'>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='lg:container mx-auto px-4 '>
                <div className='flex flex-col-reverse lg:flex-row  justify-between lg:items-center'>
                    <div className='flex gap-5 lg:gap-24 mt-12 items-center lg:items-start'>
                        <div className='text-white text-xl lg:text-3xl flex flex-col gap-12 items-center'>
                            <div>
                                <a href="https://github.com/parvejpappu100" target='_blank'><FaGithub></FaGithub></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/parvej-hasan-pappu-569730278/" target='_blank'><FaLinkedinIn /></a>
                            </div>
                            <div>
                                <a href="https://www.upwork.com/freelancers/~0138d7aea07a92ac8a" target='_blank'> <TbBrandFiverr /></a>
                            </div>
                            <div>
                                <a href="https://www.upwork.com/freelancers/~0138d7aea07a92ac8a" target='_blank'><SiUpwork /></a>
                            </div>
                            <div className='w-10 flex flex-col gap-5'>
                                <Lottie className='' animationData={animation} loop={true}></Lottie>
                                <p className='uppercase text-[16px] text-[#656565] font-bold transform -rotate-90'>Scroll</p>
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='text-[#656565] text-2xl md:text-3xl lg:text-4xl'>Hello, i’m</h4>
                            <h3 className='text-[#C9F31D] text-3xl md:text-4xl  lg:text-5xl font-bold my-4'>Parvej Hasan Pappu</h3>
                            <h2 className='text-2xl mb-5 font-bold md:text-4xl lg:text-5xl'><TypeAnimation
                                sequence={[
                                    " Web Developer",
                                    1000,
                                    " MERN Stack Developer",
                                    1000,
                                    " ReactJS Developer",
                                    1000,
                                    " Front End Developer",
                                    1000
                                ]}
                                wrapper="span"
                                speed={20}
                                style={{ fontWeight: 'bold', display: 'inline-block' }}
                                repeat={Infinity}
                                className='text-2xl font-bold text-white md:text-4xl lg:text-5xl'
                            /></h2>
                            <p className='text-[#A5A5A5] max-w-[500px]'>I'm a passionate MERN (MongoDB, Express.js, React.js, Node.js) stack developer, dedicated to crafting innovative web applications. With expertise in both front-end and back-end technologies!</p>
                            <div className='mt-5 flex items-center gap-4 lg:gap-8'>
                                <Link to='contact'>
                                    <button className='bg-[#C9F31D] text-black px-2 lg:px-5 py-2 rounded-xl lg:text-xl font-semibold flex items-center gap-1 hover:gap-2 duration-500'>Hire Me <FaAngleRight className='mt-1' /></button>
                                </Link>
                                <a href={ResumePDF}
                                    download="Resume of Parvej Hasan Pappu"
                                    target="_blank"
                                    rel="noreferrer">
                                    <button className='text-white hover:text-[#C9F31D] underline flex items-center gap-1 hover:gap-2 duration-500'>Download Resume <FaAngleRight className='mt-1' /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img className='bg-[#C9F31D] rounded-full' src={myPhoto} alt="Parvej Hasan Pappu" />
                    </motion.div>
                </div>
                <div className='bg-[#070707] p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center text-center justify-between max-w-2xl mx-auto mt-20 lg:mt-0'>
                    <div className='mt-5 '>
                        <h3 className='text-[#C9F31D] text-4xl font-bold'>2+</h3>
                        <p className='text-[#A5A5A5] text-[18px] mt-2 mb-8 font-semibold'>Years Of Experience</p>
                    </div>
                    <div className=' mt-5 '>
                        <h3 className='text-[#C9F31D] text-4xl font-bold'>105+</h3>
                        <p className='text-[#A5A5A5] text-[18px] mt-2 mb-8 font-semibold'>Project Complete</p>
                    </div>
                    <div className=' mt-5 '>
                        <h3 className='text-[#C9F31D] text-4xl font-bold'>99%</h3>
                        <p className='text-[#A5A5A5] text-[18px] mt-2 mb-8 font-semibold'>Client Satisfactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;