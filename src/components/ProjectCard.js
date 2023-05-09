
function ProjectCard({title, category, image}) {
    return (
        <div className="border rounded-xl p-4">
            <img src={image}></img>
        <h1>{title}</h1>
        <p>{category}</p>
        </div>
    )
}

export default ProjectCard;