import LiquidBackground from '../components/LiquidBackground';
import GreetMessage from '../components/GreetMessage';

function GreeterPage() {    
    return (
        <section 
        id="HeroBanner"
        className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden"
        >
            <LiquidBackground />
            <GreetMessage />    
        </section>
    );
}

export default GreeterPage;