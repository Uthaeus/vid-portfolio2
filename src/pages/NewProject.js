import { useState } from "react";

function NewProject() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    videoUrl: "",
    thumbnailUrl: "",
  });

  function changeHandler(event) {
    setFormData({
      [event.target.name]: event.target.value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("submit handler new project", formData);
  }

  return (
    <div className="new-project-container">
      <h1>Add Project</h1>
      <form onSubmit={submitHandler}>
        <div className="group-two">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="category"
            placeholder="Project Category"
            value={formData.category}
            onChange={changeHandler}
          />
        </div>
        <div className="group-two">
          <input
            type="text"
            name="videoUrl"
            placeholder="Video URL"
            value={formData.videoUrl}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="thumbnailUrl"
            placeholder="Thumbnail URL"
            value={formData.thumbnailUrl}
            onChange={changeHandler}
          />
        </div>
        <div className="group-one">
          <textarea
            name="description"
            placeholder="Description of project..."
            rows={8}
            cols={30}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
        </div>
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
