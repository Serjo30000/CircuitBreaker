const DELAY = 10000
let state = true

function checkTime() {
    state = !state
    setTimeout(checkTime, DELAY)
    return state
}

module.exports = checkTime;