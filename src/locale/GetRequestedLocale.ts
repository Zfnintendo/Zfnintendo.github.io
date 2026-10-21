import englishAbout from './AboutDescription/english.txt?raw';
import englishDetails from './ShortAboutDesc/english.txt?raw';

export type RequestedText = "AboutDescription" | "ShortAboutDesc"

const translations: Record<RequestedText, Record<string, string>> = {
    AboutDescription: {
        en: englishAbout,
    },
    ShortAboutDesc: {
        en: englishDetails,
    },
};

function GetRequestedLocale(language: string, request: RequestedText): string {

    const texts = translations[request]

    return texts[language] ?? texts.en;

}

export default GetRequestedLocale;