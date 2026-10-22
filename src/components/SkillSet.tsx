import PythonLogo from "../assets/Languages/PythonLogo.webp";
import JavaScriptLogo from "../assets/Languages/JSLogo.png";
import TypeScriptLogo from "../assets/Languages/TSLogo.png";
import HTMLLogo from "../assets/Languages/HTMLLogo.png";
import CSSLogo from "../assets/Languages/CSSLogo.png";
import CPPLogo from "../assets/Languages/CPPLogo.png";
import InoLogo from "../assets/Languages/InoLogo.png";
import LuaLogo from "../assets/Languages/LuaLogo.png";
import LuauLogo from "../assets/Languages/LuauLogo.png";
import JavaLogo from "../assets/Languages/JavaLogo.png";
import ReactLogo from "../assets/Libraries/ReactLogo.png";
import TailwindCssLogo from "../assets/Libraries/TailwindCss.png";
import MatPlotLibLogo from "../assets/Libraries/MatPlotLib.png";
import ThreeJsLogo from "../assets/Libraries/ThreeJsLogo.png";
import DiscordPyLogo from "../assets/Libraries/DiscordPyLogo.png";
import DiscordJsLogo from "../assets/Libraries/DiscordJSLogo.png";

import SkillSetInfo from "./SkillSetInfo";
import GetRequestedLocale from "../locale/GetRequestedLocale";
import type { RequestedText } from "../locale/GetRequestedLocale";
import GetLang from "../helpers/getLang";

interface Skill {
    id: string;
    name: string;
    image: string;
    descriptionKey?: RequestedText;
}

const lang: string = GetLang()

const languages: Skill[] = [
    {
        id: "python",
        name: "Python",
        image: PythonLogo,
        descriptionKey: "SkillPython"
    },
    {
        id: "javascript",
        name: "JavaScript",
        image: JavaScriptLogo,
        descriptionKey: "SkillJs"
    },
    {
        id: "typescript",
        name: "TypeScript",
        image: TypeScriptLogo,
        descriptionKey: "SkillTs"
    },
    {
        id: "html",
        name: "Hyper-Text Markup Language",
        image: HTMLLogo,
        descriptionKey: "SkillHtml"
    },
    {
        id: "css",
        name: "Cascading Style Sheets",
        image: CSSLogo,
        descriptionKey: "SkillCss"
    },
    {
        id: "cpp",
        name: "C++",
        image: CPPLogo,
        descriptionKey: "SkillCpp"
    },
    {
        id: "ino",
        name: "Arduino",
        image: InoLogo,
        descriptionKey: "SkillIno"
    },
    {
        id: "lua",
        name: "Lua",
        image: LuaLogo,
        descriptionKey: "SkillLua"
    },
    {
        id: "luau",
        name: "Luau",
        image: LuauLogo,
        descriptionKey: "SkillLuau"
    },
    {
        id: "java",
        name: "Java",
        image: JavaLogo,
        descriptionKey: "SkillJava"
    },
];

const libraries: Skill[] = [
    {
        id: "matplotlib",
        name: "MatPlotLib",
        image: MatPlotLibLogo,
        descriptionKey: "SkillMatplotlib"
    },
    {
        id: "react",
        name: "React",
        image: ReactLogo,
        descriptionKey: "SkillReact"
    },
    {
        id: "threejs",
        name: "Three.js",
        image: ThreeJsLogo,
        descriptionKey: "SkillThreejs"
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        image: TailwindCssLogo,
        descriptionKey: "SkillTailwindCss"
    },
    {
        id: "discordpy",
        name: "Discord.py",
        image: DiscordPyLogo,
        descriptionKey: "SkillDiscordpy"
    },
    {
        id: "discordjs",
        name: "Discord.js",
        image: DiscordJsLogo,
        descriptionKey: "SkillDiscordjs"
    },
];

const skillGroups = [languages, libraries];

function SkillSet() {
    return (
        <div className="flex w-full justify-center">
            <div className="
                    relative block w-full max-w-300 cursor-pointer
                    rounded-2xl border border-secondary/5
                    bg-secondary/10 p-6 text-center shadow-xl
                    font-roboto font-semibold
                    text-base sm:text-lg lg:text-xl
                ">

                <h2 className="text-2xl font-semibold">Experiences</h2>
                <p className="">Here is all the languages, frameworks and libraries I have used before, both in and out my projects!</p>
                {skillGroups.map((skills, groupIndex) => 
                    <div key={groupIndex}>
                        <hr className="my-6 border-text/20" />

                        <div className="grid grid-cols-5 gap-1 sm:grid-cols-10 lg:grid-cols-15">
                            {skills.map(skill => (
                                <div key={skill.id} className="group relative min-w-0 hover:z-20 focus-within:z-20">
                                    <button type="button" aria-label={`${skill.name} experience`} aria-describedby={`${skill.id}-info`}
                                    className="w-full cursor-pointer rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-text"
                                    onClick={(event) => {
                                        if (event.currentTarget.dataset.pinned === "true") {
                                            event.currentTarget.dataset.pinned = "false";
                                            event.currentTarget.blur();
                                        } else {
                                            event.currentTarget.dataset.pinned = "true";
                                        }
                                    }}
                                    onBlur={(event) => {
                                        event.currentTarget.dataset.pinned = "false";
                                    }}>
                                        <img src={skill.image} alt="" className="aspect-square w-full object-contain transition-transform group-hover:scale-105" />
                                    </button>

                                    <div id={`${skill.id}-info`} role="tooltip" 
                                    className="invisible absolute bottom-full left-1/2 w-56 -translate-x-1/2 pb-2 opacity-0 transition-opacity duration-150 
                                    group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                                        <div className="rounded-xl border border-secondary bg-surface p-4 text-left text-text shadow-xl" >
                                            <SkillSetInfo name={skill.name} description={
                                                skill.descriptionKey ? GetRequestedLocale(lang, skill.descriptionKey) : "To be added."}/>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SkillSet;

// to use later for 3d models of logos and unused code
/*
<div className="aspect-square w-full">
    <ModelViewer url="/models/python-logo.glb" scale={10}/>
</div>
<div className="aspect-square w-full">
    <ModelViewer url="/models/js-logo.glb" scale={10}/>
</div>
<div className="aspect-square w-full">
    <ModelViewer url="/models/ts-logo.glb" scale={10}/>
</div>
<div className="aspect-square w-full">
    <ModelViewer url="/models/html-logo.glb" scale={10}/>
</div>
<div className="aspect-square w-full">
    <ModelViewer url="/models/css-logo.glb" scale={10}/>
</div>
<div className="aspect-square w-full">
    <ModelViewer url="/models/cpp-logo.glb" scale={10}/>
</div>

<div className="grid grid-cols-5 gap-1 sm:grid-cols-10 lg:grid-cols-15">
    <img src={PythonLogo} alt="Python Logo" className="aspect-square w-full "/>
    <img src={JavaScriptLogo} alt="Python Logo" className="aspect-square w-full"/>
    <img src={TypeScriptLogo} alt="Python Logo" className="aspect-square w-full"/>
    <img src={HTMLLogo} alt="Python Logo" className="aspect-square w-full"/>
    <img src={CSSLogo} alt="Python Logo" className="aspect-square w-full"/>
    <img src={CPPLogo} alt="Python Logo" className="aspect-square w-full"/>
    <img src={InoLogo} alt="Python Logo" className="aspect-square w-full"/>
    <img src={LuaLogo} alt="Python Logo" className="aspect-square w-full"/>
    <img src={LuauLogo} alt="Python Logo" className="aspect-square w-full"/>
    <img src={JavaLogo} alt="Python Logo" className="aspect-square w-full"/>
</div>
<hr className="my-6 border-text/20"></hr>
<div className="grid grid-cols-5 gap-1 sm:grid-cols-10 lg:grid-cols-15">
    <img src={MatPlotLibLogo} alt="Python Logo" className="aspect-square w-full "/>
    <img src={ReactLogo} alt="Python Logo" className="aspect-square w-full "/>
    <img src={ThreeJsLogo} alt="Python Logo" className="aspect-square w-full "/>
    <img src={TailwindCssLogo} alt="Python Logo" className="aspect-square w-full "/>
    <img src={DiscordPyLogo} alt="Python Logo" className="aspect-square w-full "/>
    <img src={DiscordJsLogo} alt="Python Logo" className="aspect-square w-full "/>
</div>
*/