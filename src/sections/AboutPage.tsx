import AboutDescription from '../components/AboutDesc';
import CatCard from '../components/CatCard';
import DotsBackground from '../components/DotsBackground';

function AboutPage() {
    return (
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-primary px-6 py-20">

            <DotsBackground />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row">
                <div className="w-full min-w-0 lg:flex-1">
                    <AboutDescription />
                </div>

                <div className="w-full max-w-sm shrink-0">
                    <CatCard />
                </div>
            </div>
        </section>
    );
}

export default AboutPage;