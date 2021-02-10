import "./Projects.css"

import { Project } from "../../Types/Project"
import { Card } from "../Card/Card"

type ProjectsProps = {
    projects: Project[]
}

export const Projects = ({projects}: ProjectsProps) => {

    const cards = projects.map(project => <Card project={project}/>)

    return (<section className="projects">
        {cards}
    </section>)
}