import { useId, useState } from 'react';
import GetLang from '../helpers/getLang';
import GetRequestedLocale from '../locale/GetRequestedLocale';

function AboutDescription() {

    const [expanded, setExpanded] = useState(false);
    const detailsId = useId();
    
    const langauge = GetLang();
    const introduction = GetRequestedLocale(langauge, "AboutDescription");
    const details = GetRequestedLocale(langauge, "ShortAboutDesc");
    

    return (
        <button
            type="button"
            aria-expanded={expanded}
            aria-controls={detailsId}
            onClick={() => setExpanded(value => !value)}
            className="
                relative block w-full max-w-200 cursor-pointer
                rounded-2xl border border-secondary/5
                bg-secondary/10 p-6 text-center shadow-xl
                font-roboto font-semibold
                text-base sm:text-lg lg:text-xl
                transition-transform duration-300 ease-out
                hover:scale-[1.02]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-text
                motion-reduce:transform-none
            "
        >
            <span className="block">{introduction}</span>

            <span
                id={detailsId}
                aria-hidden={!expanded}
                className={`
                    grid transition-[grid-template-rows, opacity]
                    duration-500 ease-out
                    motion-reduce:transition-none
                    ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                `}
            >
                <span className="min-h-0 overflow-hidden">
                    <span className="block pt-4 whitespace-pre-line">
                        {details}
                    </span>
                </span>
            </span>

            <span className="mt-4 block text-sm text-text-muted">
                {expanded ? "Click to show less" : "Click to read more"}
            </span>
        </button>
    );

}

export default AboutDescription;