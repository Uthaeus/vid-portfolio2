import { Link } from 'react-router-dom';

import background from '../../assets/images/space.png';

function ProjectItem({id, data}) {
    return (
        <Link to={`/p/${id}`} className='project-item-wrapper'>
            <div className="image-container" style={{
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }} />
            <div className="title-container">
                {data.title}
            </div>
        </Link>
    );
}

export default ProjectItem;