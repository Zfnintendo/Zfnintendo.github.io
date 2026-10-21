import AboutDescription from '../components/AboutDesc';
import CatCard from '../components/CatCard';
import DotsBackground from '../components/DotsBackground';
import SkillSet from '../components/SkillSet';

function AboutPage() {
    return (
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-primary px-6 py-20">

            <DotsBackground />

            <div className="relative z-10 mx-auto w-full max-w-6xl">

                {/*Top Section thing so catcard and about desc*/}
                <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row">
                    <div className="w-full min-w-0 lg:flex-1">
                        <AboutDescription />
                    </div>

                    <div className="w-full max-w-sm shrink-0">
                        <CatCard />
                    </div>
                </div>

                {/*The rest of everyhtitng*/}
                <div className="mt-20">
                    <SkillSet />
                </div>
            </div>


        </section>
    );
}

export default AboutPage;