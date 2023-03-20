import { useParams } from "react-router-dom";


function ProjectDetail() {
    let { projectId } = useParams();

    return (
        <h1>{projectId}</h1>
    );
}

export default ProjectDetail;