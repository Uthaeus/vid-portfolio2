import { Link } from 'react-router-dom';

function ProjectItem({id, data}) {
    return (
        <Link to={`/p/${id}`} className='project-item-wrapper'>
            <div className="image-container">
                <img src={require('../../assets/images/space.png')} alt='' />
            </div>
            <div className="title-container">
                {data.title}
            </div>
        </Link>
    );
}

export default ProjectItem;