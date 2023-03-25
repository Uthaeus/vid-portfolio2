import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DUMMY_DATA } from "../store/dummy_data";
import background from "../assets/images/space.png";
import Modal from "../UI/Modal";
import { AuthContext } from "../store/auth-context";

function ProjectDetail() {
  let { projectId } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const isLoggedIn = authCtx.isAuthenticated;

  let project = DUMMY_DATA.find((item) => projectId === item.id);

  let { title, description, thumbnail_url, video_url } = project.data;

  function deleteItemHandler() {
    fetch(`https://food-order-app-798cb-default-rtdb.firebaseio.com/projects/${projectId}.json`, { method: 'DELETE' }).then(response => {
      console.log('deleteItemHandler ProjectDetail', response);
    }).then(() => {
      navigate('/');
    }).catch(error => {
      console.log('deleteItemHandler ProjectDetail error', error);
    });
  }

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
          {isLoggedIn && (
            <div className="remove-item-wrapper">
              <button onClick={deleteItemHandler}>Delete Item</button>
            </div>
          )}
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
