import React, { useEffect, useState } from 'react';
import TabItem from '../TabItem/TabItem';
import useProjects from '../../hooks/useProjects';
import { FaAngleRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [allProjects] = useProjects();

    const [projects, setProjects] = useState([]);
    const [isActive, setIsActive] = useState("all");

    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const handleShowAll = () => {
        setIsActive("all");
        setProjects(allProjects);
    };

    const handleShowMern = () => {
        const mern = allProjects?.filter(project => project.category === "MERN");
        setIsActive("mern");
        setProjects(mern);
    }

    const handleShowReact = () => {
        const react = allProjects?.filter(project => project.category === "REACT");
        setIsActive("react");
        setProjects(react);
    };

    const handleShowHtml = () => {
        const html = allProjects?.filter(project => project.category === "HTML/CSS");
        setIsActive("html");
        setProjects(html);
    }

    const [showAll, setShowAll] = useState(false);
    const handleShowAllProject = () => {
        setShowAll(true);
    };

    return (
        <div className='my-28 max-w-[1244px] mx-auto px-4'>
            <div className='text-center max-w-[800px] mx-auto'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='w-[10px] h-[10px] rounded-full bg-[#C9F31D]'></div>
                    <p className='text-[#A7A7A7] font-semibold'> My Projects</p>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='text-white font-semibold text-2xl md:text-3xl lg:text-5xl mt-5'>Explore My Popular <span className='text-[#C9F31D]'>Projects</span></h3>
            </div>
            <div  className='mt-20 px-4'>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='uppercase flex gap-5 justify-center'>
                    <button onClick={handleShowAll} className={isActive == "all" ? "md:text-xl font-semibold text-[#C9F31D] underline " : "text-[#A7A7A7] md:text-xl font-semibold"}>SHOW ALL</button>
                    <button onClick={handleShowMern} className={isActive == "mern" ? "md:text-xl font-semibold text-[#C9F31D] underline " : "text-[#A7A7A7] md:text-xl font-semibold"}>MERN</button>
                    <button onClick={handleShowReact} className={isActive == "react" ? "md:text-xl font-semibold text-[#C9F31D] underline " : "text-[#A7A7A7] md:text-xl font-semibold"}>REACT</button>
                    <button onClick={handleShowHtml} className={isActive == "html" ? "md:text-xl font-semibold text-[#C9F31D] underline " : "text-[#A7A7A7] md:text-xl font-semibold"}>HTML/CSS</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-20'>
                    {
                        projects?.slice(0, showAll ? projects.length : 4).map(project => <TabItem key={project._id} project={project}></TabItem>)
                    }
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className=" my-12">
                    {!showAll && (
                        <button onClick={handleShowAllProject} className='bg-[#C9F31D] text-black px-2 lg:px-5 py-2 rounded-xl lg:text-xl font-semibold flex items-center gap-1 hover:gap-2 duration-500'>View More Projects <FaAngleRight className='mt-1' /></button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;