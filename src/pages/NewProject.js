import { useHistory } from 'react-router-dom';

import NewProjectForm from "../components/projects/NewProjectForm";

function NewProject() {
    const history = useHistory();

    const addProjectHandler = (projectData) => {
        console.log('addProjectHandler newProject.js', projectData);
        fetch('database_url/meetups.json', {
            method: 'POST',
            body: JSON.stringify(projectData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/')
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
