

function ProjectItem({id, data}) {
    return (
        <div key={id}>
            <div>
                <img src={data.thumbnail_url} alt='' />
            </div>
            <div>
                {data.title}
            </div>
        </div>
    );
}

export default ProjectItem;