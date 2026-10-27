import ArrowsBackground from '../components/ArrowsBackground';
import ProjectDisplay from '../components/ProjectDisplay';

function ProjectsPage() {
    return(
    
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-dark-background px-6 py-20">
            <ArrowsBackground />
            
            <div>
                <ProjectDisplay />
            </div>

        </section>

    );
}

export default ProjectsPage;