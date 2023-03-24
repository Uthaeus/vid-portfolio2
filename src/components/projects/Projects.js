import { useState, useEffect } from 'react';

import ProjectItem from "./ProjectItem";
import { DUMMY_DATA } from "../../store/dummy_data";

function Projects() {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedProjects, setLoadedProjects] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://food-order-app-798cb-default-rtdb.firebaseio.com/projects.json').then(response => {
            console.log('fetching in projects.js', response)
        }).catch(error => {
            console.log('fetching projects.js error', error);
        });
        setIsLoading(false);
    }, []);

    const content = DUMMY_DATA.map(item => {
        return <ProjectItem key={item.id} {...item} />;
    })

    if (isLoading) {
        return (
            <div className='projects-loading-container'>
                <p className='projects-loading'>Loading...</p>
            </div>
        );
    }

    return (
        <div className="projects-wrapper">
            {content}
        </div>
    );
}

export default Projects;