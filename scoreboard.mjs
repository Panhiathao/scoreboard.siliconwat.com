import {EpisodeWinners} from "../model.mjs"

const DIVISION = {
    senior: ["hard", "extreme"],
    junior: ["easy", "medium"]
}

export function createScoreboard (division) {
    const scoreboard = []

    EpisodeWinners.reverse().forEach(episodeWinners => {
        const levelWinners = []
        // looping through each episode
        for (const level in episodeWinners) {

            if (DIVISION[division].includes(level)) {

                const levelWinner = episodeWinners[level]

                if (!levelWinners.includes(levelWinner.username)) {
                    levelWinners.push(levelWinner.username)
                }
                
                const monk = scoreboard.find(monk => monk.username === levelWinner.username)
                if (monk) {
                    monk.winnings++
                    monk.currentStreak++

                    if (monk.currentStreak > monk.longestStreak) {
                        monk.longestStreak = monk.currentStreak
                    }
                } else {
                    scoreboard.push({
                        username: levelWinner.username,
                        profile: levelWinner.profile,
                        winnings: 1,
                        currentStreak: 1,
                        longestStreak: 1
                    })
                }
            }
        }

        // reset current streak
        scoreboard.forEach(monk => {
            if (!levelWinners.includes(monk.username)) {
                monk.currentStreak = 0
            }
        })
        
    })

    return scoreboard
}