import React, { useState } from 'react';
import { FaAlignRight } from "react-icons/fa";
import { Element, Link } from 'react-scroll';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';


const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');


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
        <li><Link>Testimonial</Link></li>
        <li><Link>Contact</Link></li>
    </>

    return (
        <div>
            <div className='bg-[#131313] text-white font-semibold '>
                <div className="drawer lg:container mx-auto">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <div className="w-full navbar lg:justify-between ">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 lg:hidden px-2 uppercase text-2xl font-bold text-white">PA<span className='text-[#C9F31D]'>PP</span>U.</div>
                            <div className='hidden lg:block'>
                                <div className="flex-1 px-2 uppercase text-2xl font-bold text-white">PA<span className='text-[#C9F31D]'>PP</span>U.</div>
                            </div>
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
                                            <li><a>Sidebar Item 1</a></li>
                                            <li><a>Sidebar Item 2</a></li>
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
            </div>
        </div>
    );
};

export default Navbar;