import { useState } from 'react'

function getLang() {
    const language = new Intl.Locale(navigator.language).language;


    return language;
}

export default getLang;