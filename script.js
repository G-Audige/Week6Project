document.querySelector('title').textContent = "Project"

// Set properties of USS Assembly and alien ships
const USShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}
const AlienShip = {
    hull: [3, 4, 5, 6],
    firepower: [2, 3, 4],
    accuracy: [.6, .7, .8]
}

// Generate USS Assembly Stats
// hull
const ushull = document.createElement('p')
ushull.textContent = "Hull: " + USShip.hull
document.querySelector('#uss-info').appendChild(ushull)
// firepower
const usfirepower = document.createElement('p')
usfirepower.textContent = "Firepower: " + USShip.firepower
document.querySelector('#uss-info').appendChild(usfirepower)
// accuracy
const usaccuracy = document.createElement('p')
usaccuracy.textContent = "Accuracy: " + USShip.accuracy
document.querySelector('#uss-info').appendChild(usaccuracy)

// Generate alien ship stats
// hull
const alienhull = document.createElement('p')
let alHullHP = AlienShip.hull[Math.floor(Math.random()* AlienShip.hull.length)]
alienhull.textContent = "Hull: " + alHullHP
document.querySelector('#alien-info').appendChild(alienhull)
// firepower
const alienfirepower = document.createElement('p')
let alFire = AlienShip.firepower[Math.floor(Math.random()* AlienShip.firepower.length)]
alienfirepower.textContent = "Firepower: " + alFire
document.querySelector('#alien-info').appendChild(alienfirepower)
// accuracy
const alienaccuracy = document.createElement('p')
let alAcc = AlienShip.accuracy[Math.floor(Math.random()* AlienShip.accuracy.length)]
alienaccuracy.textContent = "Accuracy: " + alAcc
document.querySelector('#alien-info').appendChild(alienaccuracy)

// Make button attack
// USS attack 
function attack() {
    if(Math.random() <= USShip.accuracy) {
        alHullHP -= USShip.firepower
        alienhull.textContent = "Hull: " + alHullHP
        usAction(USShip.firepower)   
    }
    else {
        miss()
    }

    if(alHullHP > 0) {
        counter()
    }
    else {
        win()
    }
}
// Alien counterattack

function counter() {
    if(Math.random() <= alAcc) {
        USShip.hull -= alFire
        ushull.textContent = "Hull: " + USShip.hull
        alAction(alFire)
        if(USShip.hull <= 0) {
            lose()
        }
    }
    else {
        evade()
    }
}

// Display report
function usAction(x) {
    const report = document.createElement('p')
    report.textContent = `You hit the alien hull for ${x} damage.`
    document.querySelector('#bar').appendChild(report)
}
function alAction(x) {
    const report = document.createElement('p')
    report.textContent = `The alien ship hit your hull for ${x} damage.`
    document.querySelector('#bar').appendChild(report)
}
function miss() {
    const report = document.createElement('p')
    report.textContent = `You missed.`
    document.querySelector('#bar').appendChild(report)
}
function evade() {
    const report = document.createElement('p')
    report.textContent = `You evaded fire from the alien ship.`
    document.querySelector('#bar').appendChild(report)
}

// Make win/lose state
function win() {
    const report = document.createElement('p')
    report.textContent = `You win!`
    document.querySelector('#bar').appendChild(report)
    document.querySelector('#controls').removeAttribute('onclick')
}
function lose() {
    document.querySelector('#controls').removeAttribute('onclick')
}