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
            bg-secondary/30 backdrop-blur-lg
            border border-secondary/25
            rounded-2xl
            shadow-xl p-6
        ">
            <p>{text}</p>
        </div>
    );

}

export default AboutDescription;