const greetingCards: Record<string, string> = {
    "English": "Greetings",
    "American": "Welcome",
    "Chinese": "你好",
    "Malay": "Hai",
    "Korean": "안녕하세요",
    "Japanese": "こんにちは",
    "German": "Hallo",
    "French": "Bonjour"
};

const flipTime: number = 0.25 * 1000;

const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function* generateHello(): AsyncGenerator<string> {
    for (const [lang, greeting] of Object.entries(greetingCards)) {
        yield greeting;
        await sleep(flipTime);
    }
    return greetingCards["English"];
}

export default generateHello;