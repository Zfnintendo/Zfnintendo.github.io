import GithubStats from './GithubStats';

function AboutStats() {
    return (
        <div className="flex w-full justify-center">

            <div className="
                w-full max-w-300
                rounded-2xl border border-secondary/5
                bg-secondary/10 p-6 shadow-xl
                font-roboto font-semibold
            ">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="flex justify-center">
                        <a href="https://github.com/Zfnintendo">
                        <   GithubStats type="top-langs" langsCount={8}/>
                        </a>
                    </div>
                    
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-2xl text-center font-semibold">GitHub Statistics</h2>
                        <p className="text-center">Here is some of my GitHub Statistics such as my top langauges, my latest project and my overall general statistics!</p>
                        <hr className="border border-text w-full" />
                        <a href="https://github.com/Zfnintendo">
                            <GithubStats type="stats" showIcons={true}/>
                        </a>
                        <a href="https://github.com/Zfnintendo/Pseudocode-Interpreter">
                            <GithubStats type="pin" repository="pseudocode-interpreter"/>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AboutStats;