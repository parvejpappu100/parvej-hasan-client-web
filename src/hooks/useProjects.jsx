import { useEffect, useState } from "react";

const useProjects = () => {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, []);

    return [allProjects]
};

export default useProjects;