# Advent of Code Leaderboard Client

This script takes the JSON from Advent of Code leaderboards and 
formats it into a leaderboard with absolute times instead of stars. 
It then outputs it into a ~~md~~ file. Markdown may be fixed or not.

It Gets your input from AoC. Just create a file `myCookie.txt` and paste your cookie  from AoC in it. Run with `npm start`. 
Getting cookies programmatically is ~~WIP~~ hard. Right now you can find your cookie in your preferred browser.

## Requirements

- Node 15
- AoC leaderboard

## Example output

The repo includes example output in Leaderboard 1.md.

# Leaderboard 1  
*Day 1*  

   Time | ★ | Pos | Name
   --- | :---: | :---:  | ---
06:10:54   | 1 |   1 | Person 2
06:12:25   | 2 |   1 | Person 2
06:46:56   | 1 |   2 | Person 1
06:50:18   | 2 |   2 | Person 1
13:22:08   | 1 |   3 | Person 6
13:33:13   | 2 |   3 | Person 6
16:06:52   | 1 |   4 | Person 8
16:31:23   | 1 |   5 | Person 8
16:39:34   | 2 |   4 | Person 5
19:32:35   | 2 |   5 | Person 4
20:58:27   | 1 |   6 | Person 4
21:01:15   | 2 |   6 | Person 5
14:30:25+1 | 1 |   7 | Person 3
14:30:39+1 | 2 |   7 | Person 3