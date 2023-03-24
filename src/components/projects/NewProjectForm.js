import { useState } from "react";

const initialData = {
  title: "",
  category: "",
  videoUrl: "",
  thumbnailUrl: "",
  description: "",
};

function NewProjectForm({onAddProject}) {
  const [formData, setFormData] = useState(initialData);

  function clearForm() {
    setFormData(initialData);
  }

  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    onAddProject(formData);
    clearForm();
  }

  return (
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
          type="url"
          name="videoUrl"
          placeholder="Video URL"
          value={formData.videoUrl}
          onChange={changeHandler}
        />
        <input
          type="url"
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
          value={formData.description}
          onChange={changeHandler}
        />
      </div>
      <div className="form-actions">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default NewProjectForm;
