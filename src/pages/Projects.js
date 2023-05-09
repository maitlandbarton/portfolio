import { ProjectsProvider } from '../context/ProjectsContext';
import ProjectGrid from '../components/ProjectGrid';
import Marquee from '../components/reusable/Marquee';

const Projects = () => {
	return (
        <>
        <Marquee text1="projects" text2="projects"/>
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectGrid/>
			</div>
		</ProjectsProvider>
        </>
	);
};

export default Projects;