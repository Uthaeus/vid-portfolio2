import { useParams } from "react-router-dom";

import { DUMMY_DATA } from "../store/dummy_data";
import background from "../assets/images/space.png";

function ProjectDetail() {
  let { projectId } = useParams();

  let project = DUMMY_DATA.find((item) => projectId === item.id);

  let { title, description, thumbnail_url, video_url } = project.data;

  return (
    <div className="project-detail-wrapper">
      <div className="left-column-wrapper">
        <div className="title-detail">{title}</div>
        <p className="description-detail">{description}</p>
      </div>
      <div className="right-column-wrapper">
        <div
          className="thumbnail-detail"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
}

export default ProjectDetail;
