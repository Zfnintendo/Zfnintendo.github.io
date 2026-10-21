import GetLang from '../helpers/getLang';
import GenerateHello from '../helpers/helloStyles'

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
            <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{greeting}, I'm <span className="underline">Zeftarium</span>.</h1>
        </>
    );

}

export default GreetMessage;
