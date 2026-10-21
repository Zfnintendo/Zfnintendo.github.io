const greetingCards: Record<string, string> = {
    "en": "Hello",
    "zh": "你好",
    "ms": "Hai",
    "ko": "안녕하세요",
    "ja": "こんにちは",
    "de": "Hallo",
    "fr": "Bonjour",

    "default": "Welcome",
};

const flipTime: number = 0.25 * 1000;

const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function* GenerateHello(lang: string): AsyncGenerator<string> {
    for (const [_, greeting] of Object.entries(greetingCards)) {
        yield greeting;
        await sleep(flipTime);
    }

    if (Object.hasOwn(greetingCards, lang)) {
        yield greetingCards[lang];
    } else {
        yield greetingCards["default"];
    }
}

export default GenerateHello;