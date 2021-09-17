<<<<<<< HEAD
const winner = {
    senior : {
        extreme: {
            username: "kittos",
            profile: "https://twitter.com/3ittos"
        },
        hard: {
            username: "3ittos",
            profile: "https://twitter.com/3ittos"
        }
    },

    junior: {
        medium: {
            username: "panhiathao",
            profile: "https://twitter.com/panhiatha0"
        },
        easy: {
            username: "panhiathao",
            profile: "https://twitter.com/panhiatha0"
        }
    }
}
=======
import {createScoreboard, orderByMonks, orderByWinnings, orderByCurrentStreaks, orderByLongestStreaks} from "../library.mjs"

window.monks = createScoreboard("junior")
window.orderByMonks = orderByMonks
window.orderByWinnings = orderByWinnings
window.orderByCurrentStreaks = orderByCurrentStreaks
window.orderByLongestStreaks = orderByLongestStreaks
>>>>>>> 60d4cd71355392e61f574256a8c6c5be5d36f705

orderByWinnings(monks)