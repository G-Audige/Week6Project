document.querySelector('title').textContent = "Project"
///////////////
// Delarations
///////////////
let usStats = document.querySelector('#uss-info')
let alienStats = document.querySelector('#alien-info')
let battleLog = document.querySelector('#full-battlelog')
let turn = 1

///////////////////////
// Classes and methods
///////////////////////
// Set properties of USS Assembly and alien ships

class USShip {
    static hull = 20;
    static firepower = 5;
    static accuracy = .7
}
class AlienShip {
    static hull = randomNum(3, 6);
    static firepower = randomNum(2, 4);
    static accuracy = randomNum(6, 8) / 10
}

// Show USS Assembly Stats
// hull
const ushull = document.createElement('p')
ushull.textContent = "Hull: " + USShip.hull
usStats.appendChild(ushull)
// firepower
const usfirepower = document.createElement('p')
usfirepower.textContent = "Firepower: " + USShip.firepower
usStats.appendChild(usfirepower)
// accuracy
const usaccuracy = document.createElement('p')
usaccuracy.textContent = "Accuracy: " + USShip.accuracy
usStats.appendChild(usaccuracy)

// Show alien ship stats
// hull
const alienhull = document.createElement('p')
alienhull.textContent = "Hull: " + AlienShip.hull
alienStats.appendChild(alienhull)
// firepower
const alienfirepower = document.createElement('p')
alienfirepower.textContent = "Firepower: " + AlienShip.firepower
alienStats.appendChild(alienfirepower)
// accuracy
const alienaccuracy = document.createElement('p')
alienaccuracy.textContent = "Accuracy: " + AlienShip.accuracy
alienStats.appendChild(alienaccuracy)


/////////////
// Functions
/////////////
// Random Number Generator
function randomNum(min, max) {
    let ran = Math.floor(Math.random() * (max - min) + min)
    console.log(ran)
    return ran
}

// Make button attack
// USS attack 
function attack() {
    const report = document.createElement('h3')
    report.textContent = "Turn " + (turn++)
    battleLog.appendChild(report)
    if(Math.random() <= USShip.accuracy) {
        AlienShip.hull -= USShip.firepower
        alienhull.textContent = "Hull: " + AlienShip.hull
        usAction(USShip.firepower)   
    }
    else {
        miss()
    }

    if(AlienShip.hull > 0) {
        counter()
    }
    else {
        win()
    }
}

// Alien counterattack
function counter() {
    if(Math.random() <= AlienShip.accuracy) {
        USShip.hull -= AlienShip.firepower
        ushull.textContent = "Hull: " + USShip.hull
        alAction(AlienShip.firepower)
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
    battleLog.appendChild(report)
}
function alAction(x) {
    const report = document.createElement('p')
    report.textContent = `The alien ship hit your hull for ${x} damage.`
    battleLog.appendChild(report)
}
function miss() {
    const report = document.createElement('p')
    report.textContent = `You missed.`
    battleLog.appendChild(report)
}
function evade() {
    const report = document.createElement('p')
    report.textContent = `You evaded fire from the alien ship.`
    battleLog.appendChild(report)
}

// Make win/lose state
function win() {
    document.querySelector('#status').textContent = `You win!`
    document.querySelector('#controls').removeAttribute('onclick')
}
function lose() {
    document.querySelector('#status').textContent = `You lost!`
    document.querySelector('#controls').removeAttribute('onclick')
}


