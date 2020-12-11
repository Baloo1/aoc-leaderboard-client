const fs = require("fs");
const inputFile = process.argv[2] || "input.json";

let input; // You can paste your AoC leaderboard JSON here or import from file
input = JSON.parse(fs.readFileSync(inputFile));

const formattedTime = (date) => {
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
};

const mapData = (starIdx, star, name, challengeDay) => {
    const date = new Date(+star.get_star_ts * 1000);
    const dateOffset = date.getDate() - challengeDay;
    const offsetString = dateOffset > 0 ? `+${dateOffset}` : "  ";
    const time = formattedTime(date) + offsetString;
    const ts = +star.get_star_ts;
    return {ts, time, starIdx, name};
};

const formatEntry = ({time, starIdx, name}, position) =>
    `${time} | ${starIdx} | ${position} | ${name}`;

let output = `# Leaderboard ${input.owner_id}  \n`;
for (let day = 0; day < 26; day++) {
    const positions = {
        1: 1,
        2: 1,
    };

    /* Credit to https://github.com/lindskogen/ for "magic script" */
    const entries = Object.values(input.members)
        .filter((member) => member.completion_day_level[day] != null)
        .flatMap((member) =>
            Object.entries(member.completion_day_level[day]).map(([starIdx, star]) =>
                mapData(starIdx, star, member.name, day)
            )
        )
        .sort((left, right) => left.ts - right.ts)
        .map((data) => {
            const position = ("   " + positions[data.starIdx]).slice(-3);
            positions[data.starIdx] += 1;
            return formatEntry(data, position);
        })
        .join("\n");

    if (entries) {
        output += `*Day ${day}*\n      Time | ★ | Pos | Name\n`;
        output += entries;
        output += `  \n\n`;
    }
}
if (!fs.existsSync("./leaderboards")) {
    fs.mkdirSync("./leaderboards")
}
fs.writeFileSync(`./leaderboards/Leaderboard ${input.owner_id}.md`, output);
console.log(`Done! Printed to file: Leaderboard ${input.owner_id}.md`);
