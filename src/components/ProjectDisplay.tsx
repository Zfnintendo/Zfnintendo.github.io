import ProjectCard from "./ProjectCard";
import tempimage from "../assets/cat.png";

interface Project {
    id: string;
    image: string;
    imageAlt?: string;
    title: string;
    description: string;
    repository?: string;
}

const projects: Project[] = [    
    {
        id: "pseudocode-interpreter",
        image: tempimage,
        title: "Pseudocode Interpreter",
        description: "An Interpreter for the CAIE pseudocode language.",
        repository: "pseudocode-interpreter",
    },
    {
        id: "personal-website",
        image: tempimage,
        title: "Personal Website",
        description: "My portfolio built with React and TypeScript.",
        repository: "Zfnintendo.github.io",
    },
];

function ProjectDisplay() {
    return (
        <div className="
            mx-auto grid w-full max-w-6xl
            grid-cols-1 justify-items-center gap-8
            md:grid-cols-2 lg:grid-cols-3
        ">
            {projects.map(({ id, ...project }) => (
                <ProjectCard key={id} {...project} />
            ))}
        </div>
    );
}

export default ProjectDisplay;