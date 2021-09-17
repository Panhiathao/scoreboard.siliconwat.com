import {createScoreboard, orderByMonks, orderByWinnings, orderByCurrentStreaks, orderByLongestStreaks} from "../library.mjs"

window.monks = createScoreboard("senior")
window.orderByMonks = orderByMonks
window.orderByWinnings = orderByWinnings
window.orderByCurrentStreaks = orderByCurrentStreaks
window.orderByLongestStreaks = orderByLongestStreaks

orderByWinnings(monks)