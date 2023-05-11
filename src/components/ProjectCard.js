import { Link } from "react-router-dom";

function ProjectCard({ title, category, image, id }) {
  return (
    <div>
    <Link to={`/projects/${id}`}>
    <div className="border mx-10 md:mx-0 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-customBlue">
      <div className="h-64 overflow-hidden relative">
        <img src={image} className="absolute object-center w-full h-full inset-0 rounded-t-3xl"></img>
      </div>
      <div className="text-center px-4 py-5">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="italic">{category}</p>
      </div>
    </div>
    </Link>
    </div>
  );
}

export default ProjectCard;
