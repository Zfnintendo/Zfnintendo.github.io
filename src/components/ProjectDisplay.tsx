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
        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-8">
            {projects.map(({ id, ...project }) => (
                <div key={id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]">
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
    );
}

export default ProjectDisplay;