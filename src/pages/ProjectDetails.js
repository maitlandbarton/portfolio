import { OneProjectProvider } from "../context/OneProjectContext";
import { useParams } from "react-router-dom";
import ProjectDescription from "../components/ProjectDescription";
import ProjectGallery from "../components/ProjectGallery";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <OneProjectProvider>
      <div className="flex flex-col lg:flex-row lg:h-screen justify-around">
        <ProjectDescription id={id} />
        <ProjectGallery id={id} />
      </div>
    </OneProjectProvider>
  );
};

export default ProjectDetails;
