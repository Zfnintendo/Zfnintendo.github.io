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
            <h1>{greeting}, I'm Zeftarium.</h1>
        </>
    );

}

export default GreetMessage;
