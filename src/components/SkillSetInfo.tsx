interface SkillSetInfoProps {
    name: string;
    description: string;
}

function SkillSetInfo({ name, description }: SkillSetInfoProps) {
    return (
        <>
            <h3 className="font-semibold">{name}</h3>
            <p className="mt-2 text-sm font-normal">
                {description}
            </p>
        </>
    );
}

export default SkillSetInfo;