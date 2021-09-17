import { EpisodeWinners } from "../model.mjs"

const NA = ""
const tbody = document.querySelector("tbody")

EpisodeWinners.forEach((episodeWinners, episodeNumber) => {
    const easy = document.createElement("td")
    const easyWinner = document.createElement("a")
    easyWinner.textContent = episodeWinners["easy"] ? episodeWinners["easy"].username : NA
    easyWinner.href = episodeWinners["easy"] ? episodeWinners["easy"].profile : NA
    easy.appendChild(easyWinner)

    const medium = document.createElement("td")
    const mediumWinner = document.createElement("a")
    mediumWinner.textContent = episodeWinners["medium"] ? episodeWinners["medium"].username : NA
    mediumWinner.href = episodeWinners["medium"] ? episodeWinners["medium"].profile : NA
    medium.appendChild(mediumWinner)

    const hard = document.createElement("td")
    const hardWinner = document.createElement("a")
    hardWinner.textContent = episodeWinners["hard"] ? episodeWinners["hard"].username : NA
    hardWinner.href = episodeWinners["hard"] ? episodeWinners["hard"].profile : NA
    hard.appendChild(hardWinner)

    const extreme = document.createElement("td")
    const extremeWinner = document.createElement("a")
    extremeWinner.textContent = episodeWinners["extreme"] ? episodeWinners["extreme"].username : NA
    extremeWinner.href = episodeWinners["extreme"] ? episodeWinners["extreme"].profile : NA
    extreme.appendChild(extremeWinner)

    const tr = document.createElement("tr")
    const number = document.createElement("td")
    number.textContent = EpisodeWinners.length - episodeNumber
    tr.appendChild(number)
    tr.appendChild(easy)
    tr.appendChild(medium)
    tr.appendChild(hard)
    tr.appendChild(extreme)
    tbody.appendChild(tr)
})


