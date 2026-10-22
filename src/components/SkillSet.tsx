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
                <hr className="my-6 border-text/20"></hr>
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
            </div>
        </div>
    );
}

export default SkillSet;

// to use later for 3d models of logos
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
*/