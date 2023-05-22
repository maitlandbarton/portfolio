import ProjectCard from "./ProjectCard";
import { useContext } from 'react'
import { ProjectsContext } from "../context/ProjectsContext";

const ProjectGrid = () => {
	const { projects } = useContext(ProjectsContext)

  return (
    <section className="h-auto">
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-3'>
				{projects.map((project) => (
					<ProjectCard
						title={project.title}
						category={project.category}
						image={project.img}
						id={project.id}
						key={project.id}
						className={project.id === 1 ? 'justify-self-center' : ''}
					/>
				))}
			</div>
      


    </section>


  );
}

export default ProjectGrid;
