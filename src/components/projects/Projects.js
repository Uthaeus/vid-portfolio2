import { useState, useEffect, useContext } from "react";

import ProjectItem from "./ProjectItem";
import { DUMMY_DATA } from "../../store/dummy_data";
import { ProjectListContext } from "../../store/projectList-context";

function Projects() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState([]);
  let content;

  const projectCtx = useContext(ProjectListContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://food-order-app-798cb-default-rtdb.firebaseio.com/projects.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const projects = [];

        for (const key in data) {
          const project = {
            id: key,
            ...data[key],
          };
          projects.push(project);
        }

        setIsLoading(false);
        setLoadedProjects(projects);
        loadToContext(projects);
      })
      .catch((error) => {
        console.log("fetching projects.js error", error);
      });
  }, []);

  function loadToContext(arr) {
    projectCtx.instantiateProjectList(arr);
  }

  

  if (isLoading) {
    return (
      <div className="projects-loading-container">
        <p className="projects-loading">Loading...</p>
      </div>
    );
  }

  if (loadedProjects.length > 0) {
    content = loadedProjects.map((item) => {
      return <ProjectItem key={item.id} data={item} />;
    });
  }

  console.log("after useEffect in projects", loadedProjects);
  console.log('looking at context', projectCtx.projects);

  return <div className="projects-wrapper">{content}</div>;
}

export default Projects;
