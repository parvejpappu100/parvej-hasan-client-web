import React, { useState } from 'react';
import { FaAlignRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Element, Link } from 'react-scroll';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { SiUpwork } from 'react-icons/si';
import { TbBrandFiverr } from 'react-icons/tb';


const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [sending, setSending] = useState(false);

    const onSubmit = async (data) => {
        setSending(true);
        try {
            await fetch('https://parvej-hasan-server.vercel.app/send-email', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            reset();
            setSending(false);
            Swal.fire(
                'Thank You!',
                'I will response your message as soon as possible!',
                'success'
            )
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: error.message
            })
            setSending(false)
        }
    }


    const navOptions = <>
        <li>
            <Link style={activeLink === 'home' ? { color: '#C9F31D', textDecoration: "underline", backgroundColor: "#131313" } : {}}
                className="hover:text-white bg-[#131313] hover:bg-[#131313] rounded-none"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => setActiveLink('home')}>Home</Link>
        </li>
        <li><Link style={activeLink === 'about' ? { color: '#C9F31D', textDecoration: "underline", backgroundColor: "#131313" } : {}}
            className="hover:text-white bg-[#131313] hover:bg-[#131313] rounded-none"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('about')}>About</Link></li>
        <li><Link style={activeLink === 'services' ? { color: '#C9F31D', textDecoration: "underline", backgroundColor: "#131313" } : {}}
            className="hover:text-white bg-[#131313] hover:bg-[#131313] rounded-none"
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('services')}>Services</Link></li>
        <li><Link style={activeLink === 'skill' ? { color: '#C9F31D', textDecoration: "underline", backgroundColor: "#131313" } : {}}
            className="hover:text-white bg-[#131313] hover:bg-[#131313] rounded-none"
            to="skill"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('skill')}>Skill</Link></li>
        <li><Link style={activeLink === 'projects' ? { color: '#C9F31D', textDecoration: "underline", backgroundColor: "#131313" } : {}}
            className="hover:text-white bg-[#131313] hover:bg-[#131313] rounded-none"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('projects')}>Portfolio</Link></li>
        <li><Link style={activeLink === 'testimonial' ? { color: '#C9F31D', textDecoration: "underline", backgroundColor: "#131313" } : {}}
            className="hover:text-white bg-[#131313] hover:bg-[#131313] rounded-none"
            to="testimonial"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('testimonial')}>Testimonial</Link></li>
        <li><Link style={activeLink === 'contact' ? { color: '#C9F31D', textDecoration: "underline", backgroundColor: "#131313" } : {}}
            className="hover:text-white bg-[#131313] hover:bg-[#131313] rounded-none"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('contact')}>Contact</Link></li>
    </>

    return (
        <div>
            <div className='bg-[#131313] text-white font-semibold '>
                <div className='flex justify-center'>
                    <div className="drawer lg:container w-full fixed bg-[#131313] z-40">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col">
                            <div className="w-full navbar lg:justify-between ">
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                                <a href='https://parvejhasanpappu.com/' className="flex-1 lg:hidden px-2 uppercase text-2xl font-bold text-white">PA<span className='text-[#C9F31D]'>PP</span>U.</a>
                                <a href='https://parvejhasanpappu.com/' className='hidden lg:block'>
                                    <div className="flex-1 px-2 uppercase text-2xl font-bold text-white">PA<span className='text-[#C9F31D]'>PP</span>U.</div>
                                </a>
                                <div className="flex-none hidden lg:block">
                                    <ul className="menu menu-horizontal text-[16px]">
                                        {navOptions}
                                    </ul>
                                </div>

                                <div>
                                    <div className="drawer drawer-end">
                                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                        <div className="drawer-content">
                                            <label htmlFor="my-drawer-4" className="bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black">
                                                <FaAlignRight></FaAlignRight>
                                            </label>
                                        </div>
                                        <div className="drawer-side z-40 overflow-hidden">
                                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                            <ul className="menu p-4 w-80 min-h-full  bg-[#1F1F1F]">
                                                <div className='mt-12 lg:mt-16'>
                                                    <h3 className='text-2xl text-center font-semibold text-white'>Get Appointment</h3>
                                                    <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
                                                        <div className='w-full'>
                                                            <input {...register("name", { required: true })} className="bg-[#1F1F1F] w-full py-4  px-3 border border-[#515255] rounded-none text-white pl-4 font-semibold" placeholder='Jone Doe' type="text" />
                                                            {errors.name && <span className='text-red-600'>Name is required</span>}
                                                        </div>
                                                        <div className='w-full mt-4'>
                                                            <input {...register("email", { required: true })} className="bg-[#1F1F1F] w-full py-4  px-3 border border-[#515255] rounded-none text-white pl-4 font-semibold" placeholder='support@gmail.com' type="email" name="email" id="" />
                                                            {errors.email && <span className='text-red-600'>Email is required</span>}
                                                        </div>
                                                        <textarea {...register("message", { required: true })} className="bg-[#1F1F1F] w-full mt-4 p-5 border border-[#515255] rounded-none text-white pl-4 font-semibold" name="message" placeholder='Tell me more about your needs...' id="" cols="10" rows="4"></textarea>
                                                        {errors.message && <span className='text-red-600'>Please write something</span>}
                                                        <div className='mt-5 text-center'>
                                                            <input disabled={sending} className='bg-[#C9F31D] text-black px-2 lg:px-5 py-2 rounded-xl w-full lg:text-xl font-semibold' type="submit" value={sending ? "Sending..." : "Submit Now"} />
                                                        </div>
                                                    </form>
                                                    <div className='flex items-center mt-10 justify-center gap-4'>
                                                        <a href="https://github.com/parvejpappu100" target='_blank' className='bg-[#131313] text-[#A5A5A5] hover:bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full hover:text-black duration-500'>
                                                            <FaGithub></FaGithub>
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/parvej-hasan-pappu-569730278/" target='_blank' className='bg-[#131313] text-[#A5A5A5] hover:bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full hover:text-black duration-500'>
                                                            <FaLinkedinIn></FaLinkedinIn>
                                                        </a>
                                                        <a href="https://www.upwork.com/freelancers/~0138d7aea07a92ac8a" target='_blank' className='bg-[#131313] text-[#A5A5A5] hover:bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full hover:text-black duration-500'>
                                                            <SiUpwork />
                                                        </a>
                                                        <a href='' className='bg-[#131313] text-[#A5A5A5] hover:bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full hover:text-black duration-500'>
                                                            <TbBrandFiverr />
                                                        </a>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="drawer-side z-40">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-[#1F1F1F]">
                                {navOptions}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Element name="home" className="section">
                    <Banner></Banner>
                </Element>
                <Element name="about" className="section">
                    <About></About>
                </Element>
                <Element name="services" className="section">
                    <Services></Services>
                </Element>
                <Element name="skill" className="section">
                    <Skills></Skills>
                </Element>
                <Element name="projects" className="section">
                    <Projects></Projects>
                </Element>
                <Element name="testimonial" className="section">
                    <Testimonial></Testimonial>
                </Element>
                <Element name="contact" className="section">
                    <Contact></Contact>
                </Element>
            </div>
        </div>
    );
};

export default Navbar;