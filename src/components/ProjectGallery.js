import { useContext } from "react";
import { OneProjectContext } from "../context/OneProjectContext";

const ProjectGallery = ({ id }) => {
  const { oneProject } = useContext(OneProjectContext);
  const index = id - 1;

  return (
    <div className="grid-rows-2 my-auto">
    <img className="rounded-xl max-w-xl my-6 shadow-lg shadow-customBlue" src={oneProject[index].images[0].img}></img>
    <img className="rounded-xl max-w-xl my-6 shadow-lg shadow-customBlue" src={oneProject[index].images[1].img}></img>
    </div>
  )
}

export default ProjectGallery;

