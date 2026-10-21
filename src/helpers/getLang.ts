function GetLang(): string {
    const language: string = new Intl.Locale(navigator.language).language;


    return language; // returns language like "en" or "zh"
}

export default GetLang;