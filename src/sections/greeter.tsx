import { useEffect, useState } from 'react';
import generateHello from './helpers/helloStyles';

function GreeterPage() {

    const [greeting, setGreeting] = useState<string>('');

    useEffect(() => {
        let cancelled: boolean = false

        async function updateGreeting() {
            for await (const greetMessage of generateHello()) {
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
        <h1>{greeting}, I'm Zeftarium.</h1>
    );
}

export default GreeterPage;