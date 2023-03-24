

function NewProject() {

    return (
        <div>
            <h1>Add Project</h1>
            <form>
                <input type='text' name='title' placeholder="Project Title" />
                <input type='text' name='category' placeholder="Project Category" />
                <input type='text' name='video_url' placeholder="Video URL" />
                <input type='text' name='thumbnail_url' placeholder="Thumbnail URL" />
                <textarea name='description' placeholder='Description of project...'  />
            </form>
        </div>
    );
}

export default NewProject;

//title
//description
//video_url
//thumbnail_url
//category