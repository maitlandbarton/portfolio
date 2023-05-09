import { useState, createContext } from 'react'
import { projectsData } from '../data/projects'

export const ProjectsContext = createContext()

export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData)

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
			}}>
			{props.children}
		</ProjectsContext.Provider>
	)
}