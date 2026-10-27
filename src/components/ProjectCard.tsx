import GithubStats from './GithubStats';

interface ProjectCardProps {
    image: string;
    imageAlt?: string;
    title: string;
    description: string;
    repository?: string;
}

function ProjectCard({image, imageAlt, title, description, repository}: ProjectCardProps) {
    return (
        <article className="w-full max-w-lg overflow-hidden rounded-2xl border border-primary/20 bg-surface/20 shadow-xl">
            <img
                src={image}
                alt={imageAlt ?? `${title} preview`}
                className="aspect-video w-full object-cover"
                loading="lazy" 
            />

            <div className="flex flex-col gap-4 p-6 font-roboto text-text">
                <h3 className="text-accent text-2xl text-center font-semibold">
                    {title}
                </h3>

                <p className="whitespace-pre-line text-primary text-base text-center">
                    {description}
                </p>

                {repository && (
                    <a
                        href={`https://github.com/zfnintendo/${encodeURIComponent(repository)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${title} repository on GitHub`}
                        className="
                            mt-2 block self-center w-full max-w-100
                            rounded-2xl
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-text
                        "
                    >
                        <GithubStats type="pin" repository={repository} />
                        <span className="mt-2 block text-accent-hover text-center text-sm underline"> View repository on GitHub</span>
                    </a>
                )}
            </div>

        </article>
    );
}

export default ProjectCard;