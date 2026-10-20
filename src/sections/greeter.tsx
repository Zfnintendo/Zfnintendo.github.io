import LiquidBackground from '../components/LiquidBackground';
import GreetMessage from '../components/GreetMessage';

function GreeterPage() {    
    return (
        <section 
            id="HeroBanner"
            className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden"
        >
            <LiquidBackground />

            <div className="relative z-10 text-center">
                <GreetMessage />
                <h2>Let's get to know each other.</h2>
            </div>
        </section>
    );
}

export default GreeterPage;