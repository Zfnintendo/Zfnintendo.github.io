import ArrowsBackground from '../components/ArrowsBackground';
import ProjectCard from '../components/ProjectCard';
import ProjectImage from '../assets/cat.png';

function ProjectsPage() {
    return(
    
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-dark-background px-6 py-20">
            <ArrowsBackground />
            <ProjectCard
                    image={ProjectImage}
                    title="blah"
                    description="blahblahblahblahblahblahblahblahblah"
                    repository="pseudocode-interpreter"
                />

        </section>

    );
}

export default ProjectsPage;