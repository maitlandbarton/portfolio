import { OneProjectProvider } from "../context/OneProjectContext";
import { useParams } from 'react-router-dom';
import ProjectHeader from "../components/ProjectHeader";

const ProjectDetails = () => {

    const { id } = useParams()

    return (
        <OneProjectProvider>
			<ProjectHeader id={id}/>
		</OneProjectProvider>
    )
}

export default ProjectDetails;