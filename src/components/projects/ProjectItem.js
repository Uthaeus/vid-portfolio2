

function ProjectItem({id, data}) {
    return (
        <div key={id} className='project-item-wrapper'>
            <div className="image-container">
                <img src={data.thumbnail_url} alt='' />
            </div>
            <div className="title-container">
                {data.title}
            </div>
        </div>
    );
}

export default ProjectItem;