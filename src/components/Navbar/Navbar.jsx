import React from 'react';
import { FaAlignRight } from "react-icons/fa";


const Navbar = () => {

    const navOptions = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Skill</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Testimonial</a></li>
        <li><a>Contact</a></li>
    </>

    return (
        <div className='bg-[#131313] text-white font-semibold '>
            <div className="drawer lg:container mx-auto px-4">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar lg:justify-between ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 lg:hidden px-2 uppercase text-2xl font-bold text-white">PA<span className='text-[#F59E0B]'>PP</span>U.</div>
                        <div className='hidden lg:block'>
                            <div className="flex-1 px-2 uppercase text-2xl font-bold text-white">PA<span className='text-[#C9F31D]'>PP</span>U.</div>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal text-[16px]">
                                {/* Navbar menu content here */}
                                {navOptions}
                            </ul>
                        </div>

                        <div>
                            <div className="drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer-4" className="bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black">
                                        <FaAlignRight></FaAlignRight>
                                    </label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-80 min-h-full bg-[#1F1F1F]">
                                        {/* Sidebar content here */}
                                        <li><a>Sidebar Item 1</a></li>
                                        <li><a>Sidebar Item 2</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#1F1F1F]">
                        {/* Sidebar content here */}
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;