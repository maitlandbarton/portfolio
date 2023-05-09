import { Link } from "react-router-dom";

function ProjectCard({ title, category, image, id }) {
  return (
    <Link to={`/projects/${id}`}>
    <div className="border rounded-3xl shadow-xl hover:shadow-2xl">
      <div className="h-3/4 overflow-hidden">
        <img src={image} className="object-cover w-full rounded-t-3xl"></img>
      </div>
      <div className="text-center px-4 py-5">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="italic">{category}</p>
      </div>
    </div>
    </Link>
  );
}

export default ProjectCard;
