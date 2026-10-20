import { useEffect, useState } from 'react';
import GenerateHello from './helpers/HelloStyles';
import GetLang from './helpers/GetLang';
import LiquidBackground from '../components/LiquidBackground';

function GreeterPage() {

    const [greeting, setGreeting] = useState<string>('');
    const lang = GetLang();

    useEffect(() => {
        let cancelled: boolean = false

        async function updateGreeting() {
            for await (const greetMessage of GenerateHello(lang)) {
                if (cancelled) break;
                setGreeting(greetMessage);
            }
        }

        void updateGreeting();

        return () => {
            cancelled = true
        };
    }, []);
    
    return (
        <>
            <LiquidBackground />
            <h1>{greeting}, I'm Zeftarium.</h1>
            <h2>Let's get to know each other.</h2>
        </>
    );
}

export default GreeterPage;