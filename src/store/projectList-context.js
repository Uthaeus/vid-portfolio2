import { createContext, useState } from "react";


export const ProjectListContext = createContext({
    projects: [],
    instantiateProjectList: (arr) => {},
    addProject: (data) => {},
    removeProject: (id) => {}
});

function ProjectListContextProvider({children}) {
    const [projectsArr, setProjectsArr] = useState();

    function instantiateProjectList(arr) {
        console.log('instantiateProjectList -', arr);
        setProjectsArr(arr);
    }

    function addProject(project) {
        setProjectsArr(prev => [...prev, project]);
    }

    function removeProject(id) {
        let filteredList = projectsArr.filter(project => project.id !== id);
        setProjectsArr(filteredList);
    }

    const value = {
        projects: projectsArr,
        instantiateProjectList: instantiateProjectList,
        addProject: addProject,
        removeProject: removeProject
    }

    return <ProjectListContext.Provider value={value}>{children}</ProjectListContext.Provider>
}

export default ProjectListContextProvider;