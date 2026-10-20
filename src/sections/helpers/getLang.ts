function GetLang() {
    const language = new Intl.Locale(navigator.language).language;


    return language;
}

export default GetLang;