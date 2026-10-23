import englishAbout from './AboutDescription/english.txt?raw';
import englishDetails from './ShortAboutDesc/english.txt?raw';

import englishSkillSetDesc from './SkillSet/desc/english.txt?raw';

import englishSkillPy from './SkillSet/Languages/python/english.txt?raw';
import englishSkillJs from './SkillSet/Languages/javascript/english.txt?raw';
import englishSkillTs from './SkillSet/Languages/typescript/english.txt?raw';
import englishSkillHtml from './SkillSet/Languages/html/english.txt?raw';
import englishSkillCss from './SkillSet/Languages/css/english.txt?raw';
import englishSkillCpp from './SkillSet/Languages/cpp/english.txt?raw';
import englishSkillIno from './SkillSet/Languages/ino/english.txt?raw';
import englishSkillLua from './SkillSet/Languages/lua/english.txt?raw';
import englishSkilLuau from './SkillSet/Languages/luau/english.txt?raw';
import englishSkillJava from './SkillSet/Languages/java/english.txt?raw';

import englishSkillMatplotlib from './SkillSet/Libraries/matplotlib/english.txt?raw';
import englishSkillReact from './SkillSet/Libraries/react/english.txt?raw';
import englishSkillThreeJs from './SkillSet/Libraries/threejs/english.txt?raw';
import englishSkillTailwind from './SkillSet/Libraries/tailwind/english.txt?raw';
import englishSkillDiscordpy from './SkillSet/Libraries/discordpy/english.txt?raw';
import englishSkillDiscordjs from './SkillSet/Libraries/discordjs/english.txt?raw';

import englishGithubStats from './GithubStats/english.txt?raw';

export type RequestedText = 
"AboutDescription" | 
"ShortAboutDesc" | 

"SkillSetDesc" |

"SkillPython" | 
"SkillJs" |
"SkillTs" |
"SkillHtml" |
"SkillCss" |
"SkillCpp" |
"SkillIno" |
"SkillLua" |
"SkillLuau" |
"SkillJava" |

"SkillMatplotlib" |
"SkillReact" |
"SkillThreejs" |
"SkillTailwindCss" |
"SkillDiscordpy" |
"SkillDiscordjs" |

"GithubStats" 


const translations: Record<RequestedText, Record<string, string>> = {
    AboutDescription: {
        en: englishAbout,
    },
    ShortAboutDesc: {
        en: englishDetails,
    },

    SkillSetDesc: {
        en: englishSkillSetDesc,
    },

    // Skill Set lang
    SkillPython: {
        en:englishSkillPy,
    },
    SkillJs: {
        en:englishSkillJs,
    },
    SkillTs: {
        en:englishSkillTs,
    },
    SkillHtml: {
        en:englishSkillHtml,
    },
    SkillCss: {
        en:englishSkillCss,
    },
    SkillCpp: {
        en:englishSkillCpp,
    },
    SkillIno: {
        en:englishSkillIno,
    },
    SkillLua: {
        en:englishSkillLua,
    },
    SkillLuau: {
        en:englishSkilLuau,
    },
    SkillJava: {
        en:englishSkillJava,
    },
    
    // Skill Set lib
    SkillMatplotlib: {
        en:englishSkillMatplotlib,
    },
    SkillReact: {
        en:englishSkillReact,
    },
    SkillTailwindCss: {
        en:englishSkillTailwind,
    },
    SkillThreejs: {
        en:englishSkillThreeJs,
    },
    SkillDiscordpy: {
        en:englishSkillDiscordpy,
    },
    SkillDiscordjs: {
        en:englishSkillDiscordjs,
    },

    GithubStats: {
        en: englishGithubStats,
    },
};

function GetRequestedLocale(language: string, request: RequestedText): string {

    const texts = translations[request]

    return texts[language] ?? texts.en;

}

export default GetRequestedLocale;