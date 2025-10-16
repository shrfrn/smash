'use strict'

var gInterval
var gIntervalFreq = 1000
var gElCell
var gScore = 0

function onToggleGame(elBtn) {
	if (gInterval) {
		clearInterval(gInterval)
		gInterval = null
		elBtn.innerText = 'Resume'
	} else {
		gInterval = setInterval(playTurn, gIntervalFreq)
		elBtn.innerText = 'Pause'
	}
}

function playTurn() {
	const cellId = getRandomIntInclusive(1, 60)
    const selector = '#cell-' + cellId

    gElCell = document.querySelector(selector)
    gElCell.style.backgroundColor = 'red'
    
    console.log(0.8 * gIntervalFreq)
    setTimeout(clearCell, 0.8 * gIntervalFreq)
}

function clearCell() {
    gElCell.style.backgroundColor = 'transparent'
    gElCell = null
}

function onCellHovered(elCell) {
    if (elCell !== gElCell) return
    
    gElCell.style.backgroundColor = 'blue'
    updateScore()
}

function updateScore() {
    gScore++
    renderScore()

    if (gScore % 10 === 0) {
        gIntervalFreq -= 200

        if (gIntervalFreq === 200) {
            clearInterval(gInterval)
            alert('game over')
        } else {
            levelUp()
        }
    }
}

function levelUp() {
    clearInterval(gInterval)
    gInterval = setInterval(playTurn, gIntervalFreq)
}

function renderScore() {
    const elScore = document.querySelector('h2 span')
    elScore.innerText = gScore
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min) // Ensure min is an integer
	max = Math.floor(max) // Ensure max is an integer
	return Math.floor(Math.random() * (max - min + 1)) + min
}