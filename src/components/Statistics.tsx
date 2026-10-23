// unused

export type StatsType = "General" | "UsedLang" | "DevTime" | "RepoPin"

interface StatisticsProps {
    statsType: StatsType;
    isLight: boolean;
    repository?: string;
    langsCount?: number;
}

function Statistics({ statsType, isLight, repository, langsCount = 5,}: StatisticsProps) {

    let theme: string = "dark_github";

    if (isLight) theme = "light_github";

    switch (statsType) {
        case "General": {
            return (
                <img src={`https://github-stats-extended.vercel.app/api?username=zfnintendo&theme=${theme}`} alt="General Stats"/>
            );
        }
        case "UsedLang": {
            return (
                <img src={`https://github-stats-extended.vercel.app/api/top-langs/?username=zfnintendo&langs_count=${langsCount}&theme=${theme}`} alt="Most Used Languages"/>
            );
        }
        case "DevTime": {
            return (
                <img src={`https://github-stats-extended.vercel.app/api/wakatime?username=zfnintendo&langs_count=${langsCount}&theme=${theme}`} alt="Waka Time Stats"/>
            );
        }
        case "RepoPin": {
            return (
                <img src={`https://github-stats-extended.vercel.app/api/pin/?username=zfnintendo&repo=${repository}&theme=${theme}_repocard`} alt="Repo Card"/>
            );
        }
        default: {
            return (
                <>
                <p>Unavailable Statistic.</p>
                </>
            );
        }
    }
}

export default Statistics;