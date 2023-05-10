import { useContext } from "react";
import { OneProjectContext } from "../context/OneProjectContext";

const ProjectDescription = ({ id }) => {
  const { oneProject } = useContext(OneProjectContext);
  const index = id - 1;

  return (
    <div className="border w-1/2 my-auto px-10">
      <h1 className="text-4xl font-semibold">{oneProject[index].title}</h1>

      <p className="text-xl font-bold mt-2">
        <span>Demo</span> • <span>Source Code</span>
      </p>
      <br/>

      <h2 className="text-2xl font-semibold">Technologies Used</h2>
      <br/>

      <p className="text-lg">{oneProject[index].technologiesUsed.join(" / ")}</p>
      <br/>

      

      <h2 className="text-2xl font-semibold">Objective</h2>
      <br/>

      <p className="text-lg">{oneProject[index].objective}</p>
      <br/>

      <h2 className="text-2xl font-semibold">Description</h2>
      <br/>

      <p className="text-lg">{oneProject[index].description}</p>
    </div>
  );
};

export default ProjectDescription;
