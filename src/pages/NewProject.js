import { useNavigate } from "react-router-dom";

import NewProjectForm from "../components/projects/NewProjectForm";

function NewProject() {
    const navigate = useNavigate();

    const addProjectHandler = (projectData) => {
        console.log('addProjectHandler newProject.js', projectData);
        fetch('https://food-order-app-798cb-default-rtdb.firebaseio.com/projects.json', {
            method: 'POST',
            body: JSON.stringify(projectData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/');
        });
    }

  return (
    <div className="new-project-container">
      <h1>Add Project</h1>
      <NewProjectForm onAddProject={addProjectHandler} />
    </div>
  );
}

export default NewProject;
