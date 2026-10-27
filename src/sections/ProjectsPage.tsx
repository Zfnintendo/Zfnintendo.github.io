import ArrowsBackground from '../components/ArrowsBackground';
import ProjectDisplay from '../components/ProjectDisplay';

function ProjectsPage() {
    return(
    
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-dark-background px-6 py-20">
            <ArrowsBackground />
            
            <div className="relative z-10 w-full items-center">
                <ProjectDisplay />
            </div>

        </section>

    );
}

export default ProjectsPage;