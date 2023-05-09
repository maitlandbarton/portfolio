import ProjectCard from "./ProjectCard";
import { useContext } from 'react'
import { ProjectsContext } from "../context/ProjectsContext";

const ProjectGrid = () => {
	const { projects } = useContext(ProjectsContext)

  return (
    <div className="h-screen">
    
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-10 '>
				{projects.map((project) => (
					<ProjectCard
						title={project.title}
						category={project.category}
						image={project.img}
						id={project.id}
						key={project.id}
					/>
				))}
			</div>
      


    </div>


  );
}

export default ProjectGrid;
