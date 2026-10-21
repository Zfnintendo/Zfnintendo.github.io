import LiquidBackground from '../components/LiquidBackground';
import GreetMessage from '../components/GreetMessage';

function GreeterPage() {    
    return (
        <section 
            id="HeroBanner"
            className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden"
        >
            <LiquidBackground />

            <div className="
                flex flex-col 
                items-center justify-center text-center 
                min-h-100 w-full max-w-200 z-10 
                font-roboto
                bg-surface/10 backdrop-blur-lg
                border border-surface/5
                rounded-2xl
                shadow-xl p-6
                ">
                <GreetMessage />
                <h2 className="text-base sm:text-lg lg:text-xl">Let's get to know each other.</h2>
            </div>
        </section>
    );
}

export default GreeterPage;