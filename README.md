# Advent of Code Leaderboard Client

This script takes the JSON from Advent of Code leaderboards and 
formats it into a leaderboard with absolute times instead of stars. 
It then outputs it into a md file. 

Get your input from AoC. Paste it into input.json. Run with `npm start`. It will choose default input from input.json and expects it to exist. For any
other input file start with `npm start INPUTFILENAME`. In the future this may be improved.

You have to manually get the input from a leaderboards API section. Can be found from [AoC website](https://adventofcode.com/2020/leaderboard/private/view/YOURIDHERE.json) 
by replacing YOURIDHERE in the URL.

## Requirements

- Node 15
- AoC leaderboard

## Example output

The repo includes example input in input.json. Just replace it with your own data. 
It includes sample output in Leaderboard 1.md.

# Leaderboard 1  
*Day 1*  

Time | Id | Name  
--- | --- | ---  
06:10:54| 1 | Person 2  
06:12:25| 2 | Person 2  
06:46:56| 1 | Person 1  
06:50:18| 2 | Person 1  
13:22:08| 1 | Person 6  
13:33:13| 2 | Person 6  
14:30:25| 1 | Person 8  
14:30:39| 2 | Person 8  
16:06:52| 1 | Person 5  
16:31:23| 1 | Person 4  
16:39:34| 2 | Person 4  
19:32:35| 2 | Person 5  
20:58:27| 1 | Person 3  
21:01:15| 2 | Person 3    