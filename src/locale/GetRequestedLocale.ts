import englishAbout from './AboutDescription/english.txt?raw';

export type RequestedText = "AboutDescription"

const translations: Record<RequestedText, Record<string, string>> = {
    AboutDescription: {
        en: englishAbout,
    },
};

function GetRequestedLocale(language: string, request: RequestedText): string {

    const texts = translations[request]

    return texts[language] ?? texts.en;

}

export default GetRequestedLocale;