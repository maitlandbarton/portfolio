import { useState, createContext } from 'react';
import { oneProjectData } from '../data/oneProjectData';

export const OneProjectContext = createContext()

export const OneProjectProvider = ({ children }) => {
    const [oneProject, setOneProject] = useState(oneProjectData)

    return (
        <OneProjectContext.Provider
            value={{
                oneProject,
                setOneProject,
            }}>
            { children }
        </OneProjectContext.Provider>
    )
}