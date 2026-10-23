
// type = "stats", "top-langs", "pin"
// showicons = bool
// langsCount = number
// repository = repo name

const githubUsername = "zfnintendo";
const baseURL = "https://github-stats-extended.vercel.app/api";

const themes = {
    light: {
        bg_color: "FFF9E7",
        title_color: "B87918",
        text_color: "5C4317",
        icon_color: "E9A23B",
        border_color: "FFD166",
    },
    dark: {
        bg_color: "302619",
        title_color: "FFD166",
        text_color: "F6E5BE",
        icon_color: "E9A23B",
        border_color: "8B641F",
    },
} as const;

type Theme = keyof typeof themes;

type StatsOptions =
    {
          type: "stats";
          showIcons?: boolean;
    }
    | {
          type: "top-langs";
          langsCount?: number;
      }
    | {
          type: "pin";
          repository: string;
      };

function createStatsURL(theme: Theme, options: StatsOptions): string {
    const params = new URLSearchParams({
        username: githubUsername,
        ...themes[theme],
    });

    let endpoint = baseURL;

    switch (options.type) {
        case "stats":
            params.set(
                "show_icons",
                String(options.showIcons ?? true)
            );
            break;

        case "top-langs":
            endpoint += "/top-langs/";
            params.set(
                "langs_count",
                String(options.langsCount ?? 5)
            );
            break;

        case "pin":
            endpoint += "/pin/";
            params.set("repo", options.repository);
            break;
    }

    return `${endpoint}?${params.toString()}`;
}

type GitHubStatsProps = StatsOptions & {
    className?: string;
};

function GitHubStats(props: GitHubStatsProps) {
    const { className = "" } = props;

    return (
        <div
            className={`
                flex items-center justify-center rounded-2xl w-full max-w-100
                border border-[#FFD166] bg-[#FFF4CC] 
                transition-[transform,background-color,border-color] duration-300 ease-out
                hover:scale-[1.03] motion-reduce:transform-none 
                dark:border-[#8B641F] dark:bg-[#211B13] ${className}`}
        >
            <img
                src={createStatsURL("light", props)}
                alt={`GitHub ${props.type} statistics`}
                className="block w-full max-w-lg rounded-xl dark:hidden"
                loading="lazy"
            />

            <img
                src={createStatsURL("dark", props)}
                alt={`GitHub ${props.type} statistics`}
                className="hidden w-full max-w-lg rounded-xl dark:block"
                loading="lazy"
            />
        </div>
    );
}

export default GitHubStats;
