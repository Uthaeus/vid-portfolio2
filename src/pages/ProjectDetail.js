import { useState } from "react";
import { useParams } from "react-router-dom";

import { DUMMY_DATA } from "../store/dummy_data";
import background from "../assets/images/space.png";
import Modal from "../UI/Modal";

function ProjectDetail() {
  let { projectId } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let project = DUMMY_DATA.find((item) => projectId === item.id);

  let { title, description, thumbnail_url, video_url } = project.data;

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  let modalContent = (
    <div className="modal-content-wrapper">
      <div className="modal-image-wrapper">
        <img src={require("../assets/images/space.png")} alt="" />
      </div>
      <div className="modal-button-wrapper">
        <button className="modal-button" onClick={closeModalHandler}>Close</button>
      </div>
    </div>
  );

  return (
    <>
      <div className="project-detail-wrapper">
        <div className="left-column-wrapper">
          <div className="title-detail">{title}</div>
          <p className="description-detail">{description}</p>
        </div>

        <div className="right-column-wrapper">
          <div
            className="thumbnail-detail"
            onClick={openModalHandler}
            style={{
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
      {modalIsOpen && <Modal onClose={closeModalHandler}>{modalContent}</Modal>}
    </>
  );
}

export default ProjectDetail;
