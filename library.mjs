import {createScoreboard} from "/scoreboard.mjs"
export {createScoreboard}

let monksOrder = true
export function orderByMonks(monks) {
    monks.sort(monksOrder ? (a, b) => b.username.localeCompare(a.username) : (b, a) => b.username.localeCompare(a.username))
    generateScoreboard(monks)
    monksOrder = !monksOrder
}

let winningsOrder = true
export function orderByWinnings(monks) {
    monks.sort(winningsOrder ? (a, b) => b.winnings - a.winnings : (b, a) => b.winnings - a.winnings)
    generateScoreboard(monks)
    winningsOrder = !winningsOrder
}

let currentStreaksOrder = true
export function orderByCurrentStreaks(monks) {
    monks.sort(currentStreaksOrder ? (a, b) => b.currentStreak - a.currentStreak : (b, a) => b.currentStreak - a.currentStreak)
    generateScoreboard(monks)
    currentStreaksOrder = !currentStreaksOrder
}

let longestStreaksOrder = true
export function orderByLongestStreaks(monks) {
    monks.sort(longestStreaksOrder ? (a, b) => b.longestStreak - a.longestStreak : (b, a) => b.longestStreak - a.longestStreak)
    generateScoreboard(monks)
    longestStreaksOrder = !longestStreaksOrder
}

export function generateScoreboard (monks) {
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    monks.forEach(monk => {
        const tr = document.createElement("tr")
        const a = document.createElement("a")
        const username = document.createElement("td")
        const winnings = document.createElement("td")
        const currentStreak = document.createElement("td")
        const longestStreak = document.createElement("td")

        a.textContent = monk.username
        a.href = monk.profile
        username.appendChild(a)

        winnings.textContent = monk.winnings
        currentStreak.textContent = monk.currentStreak
        longestStreak.textContent = monk.longestStreak

        tr.appendChild(username)
        tr.appendChild(winnings)
        tr.appendChild(currentStreak)
        tr.appendChild(longestStreak)

        tbody.appendChild(tr)
    })
}