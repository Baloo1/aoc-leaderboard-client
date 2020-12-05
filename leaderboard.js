const fs = require("fs");
const inputFile = process.argv[2] || "input.json";

let input = {}; // You can paste your AoC leaderboard JSON here or import from file
input = JSON.parse(fs.readFileSync(inputFile));

const formattedTime = (date) => {
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

const formatEntry = (id, s, name) => {
    const time = formattedTime(new Date(+s.get_star_ts * 1000));
    return `${time}| ${id} | ${name}  `
}

let output = `# Leaderboard ${input.owner_id}  \n`;
for (let i = 0; i < 26; i++) {

    /*Credit to https://github.com/lindskogen/ for oneliner*/
    const entries = Object.values(input.members).flatMap(m => Object.entries(m.completion_day_level[i] ?? {}).map(([id, s]) => formatEntry(id, s, m.name))).sort().join("\n")
    if (entries) {
        output +=
            `*Day ${i}*  \n
Time | Id | Name  
--- | --- | ---  \n`;
        output += entries;
        output += `  \n\n`
    }
}

fs.writeFileSync(`Leaderboard ${input.owner_id}.md`, output)
console.log(`Done! Printed to file: Leaderboard ${input.owner_id}.md`)
