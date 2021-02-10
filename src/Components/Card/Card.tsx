import "./Card.css"
import "./card__content.css"
import "./card__title.css"
import "./card__image.css"
import "./card__description.css"
import "./card__footer.css"

import "./github-link.css"

import { Project } from "../../Types/Project"

type CardData = {
    project: Project
}

export const Card = ({project}: CardData) => {

    const {description, title, image, tags, githubLink, projectLink} = project

    return (
        <article className="card" onClick={() => window.open(projectLink, '_blank')}>
            <img src={image} alt="" className="card__image"/>
            <section className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
                <footer className="card__footer">
                    <a href={githubLink} className="github-link"></a>
                    {tags}
                </footer>
            </section>
        </article>
    )
}