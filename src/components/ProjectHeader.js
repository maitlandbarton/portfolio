import { useContext } from 'react';
import { OneProjectContext } from '../context/OneProjectContext';

const ProjectHeader = ( {id} ) => {
    const { oneProject } = useContext(OneProjectContext)

    return (
        <h1>{oneProject[id-1].title}</h1>
    )
}

export default ProjectHeader;