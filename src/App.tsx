import './App.css';

import placeholderImage from  "./Images/placeholder.png";
import mestoImage from  "./Images/mesto.png";

import { Container } from './Components/Container/Container';
import { Header } from "./Components/Header/Header";
import { Projects } from './Components/Projects/Projects';
import { Project } from "./Types/Project"

const ProjectList = [
  {
    title: "Mesto",
    description: "Страница о путешествиях",
    image: mestoImage,
    githubLink: "https://github.com/weeks6/mesto",
    projectLink: "https://weeks6.github.io/mesto",
    tags: ["Praktikum"], 
  },
  {
    title: "Russian Travel",
    description: "Путешествие по России",
    image: placeholderImage,
    githubLink: "https://github.com/weeks6/russian-travel",
    projectLink: "https://weeks6.github.io/russian-travel",
    tags: ["Praktikum"], 
  },

] as Project[]

const App = () => {
  return (
    <Container>
      <Header />
      <Projects projects={ProjectList}/>
    </Container>
  )
}

export default App;
