import GetLang from '../sections/helpers/GetLang';
import GenerateHello from '../sections/helpers/HelloStyles'

import { useState, useEffect } from 'react';


function GreetMessage() {

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
            <div className="relative z-10 text-center">
                <h1>{greeting}, I'm Zeftarium.</h1>
                <h2>Let's get to know each other.</h2>
            </div>
        </>
    );

}

export default GreetMessage;