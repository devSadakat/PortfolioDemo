import "../Projects/project.css"
import project from "../../assets/project.png"

const Projects = () => {
    return (
        <div>
            <h1>Some of my projects</h1>
            <div id="project">
                <img src={project} alt="" />
                <img src={project} alt="" />
                <img src={project} alt="" />
                <img src={project} alt="" />
                <img src={project} alt="" />
                <img src={project} alt="" />
            </div>
        </div>
    );
};

export default Projects;