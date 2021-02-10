import {  ReactElement } from "react"
import "./container.css"

type ContainerProps = {
    children?: ReactElement[] | ReactElement,
    theme?: 'light' | 'dark'
}

export const Container = ({children}: ContainerProps) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

