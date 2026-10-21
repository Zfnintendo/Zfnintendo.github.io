import GetLang from '../helpers/getLang';
import GetRequestedLocale from '../locale/GetRequestedLocale';

function AboutDescription() {
    
    const text = GetRequestedLocale(GetLang(), "AboutDescription");

    return (
        <div className="
            flex flex-col 
            items-center justify-center text-center
            min-h-100 w-full max-w-175 z-10 
            font-roboto font-semibold
            text-base sm:text-lg lg:text-xl
            bg-secondary/10 
            border border-secondary/5
            rounded-2xl
            shadow-xl p-6

            transition-transform duration-300 ease-out hover:scale-105
            motion-reduce:transform-none
        ">
            <p>{text}</p>
        </div>
    );

}

export default AboutDescription;