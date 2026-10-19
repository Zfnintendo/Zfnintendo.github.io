import { useEffect, useState } from 'react';
import generateHello from './helpers/helloStyles';
import getLang from './helpers/getLang';

function GreeterPage() {

    const [greeting, setGreeting] = useState<string>('');
    const lang = getLang();

    useEffect(() => {
        let cancelled: boolean = false

        async function updateGreeting() {
            for await (const greetMessage of generateHello(lang)) {
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
            <h1>{greeting}, I'm Zeftarium.</h1>
            <h2>Let's get to know each other.</h2>
        </>
    );
}

export default GreeterPage;