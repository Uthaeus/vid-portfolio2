
import ProjectItem from "./ProjectItem";
import { DUMMY_DATA } from "../../store/dummy_data";

function Projects() {

    const content = DUMMY_DATA.map(item => {
        return <ProjectItem {...item} />;
    })

    return (
        <div className="projects-wrapper">
            {content}
        </div>
    );
}

export default Projects;