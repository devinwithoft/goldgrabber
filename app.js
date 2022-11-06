let upgrades = [
    {
        name: 'bucket',
        price: 50,
        quantity: 0,
        multiplier: 1
    }, {
        name: 'wheelbarrow',
        price: 500,
        quantity: 0,
        multiplier: 10
    }
]

let characters = [
    {
        name: 'accountant',
        price: 2000,
        quantity: 1,
        multiplier: 20,
        duration: 3000,
    },
    {
        name: 'pyramid-scheme',
        price: 20000,
        quantity: 0,
        multiplier: 2000,
        duration: 12000
    }
    , {
        name: 'Beelzebub',
        price: 66666,
        quantity: 0,
        multiplier: 6666,
        duration: 6666,
    }
]

let gold = 66656

function grabGold() {
    gold++
    upgrades.forEach(u => gold += u.quantity * u.multiplier)
    drawGold()
    console.log(gold)
}

function accGold() {
    let a = characters.find(c => c.name == "accountant")
    gold += a.quantity * a.multiplier
    drawGold()
}



function pyrGold() {
    let p = characters.find(c => c.name == "pyramid-scheme")
    gold += p.quantity * p.multiplier
    drawGold()
}

function beeGold() {
    let b = characters.find(b => b.name == "Beelzebub")
    gold -= b.quantity * b.multiplier
    drawGold()
}

function buyUpgrade(X) {
    let itembought = upgrades.find(u => u.name == X)
    if (gold >= itembought.price) {
        gold -= itembought.price,
            itembought.quantity++
        itembought.price = Math.ceil(itembought.price + (itembought.price * .2))
        document.getElementById(`${X}price`).innerText = itembought.price
        drawGold()
        document.getElementById(`${X}count`).style.display = "block"
        document.getElementById("inventory").style.display = "block"
        document.getElementById(`${X}stat`).innerText = itembought.multiplier * (itembought.quantity)
        document
        document.getElementById(`${X}change`).innerText = "Upgrade"
        let totalUpgrade = 1
        upgrades.forEach(u => totalUpgrade += u.multiplier * u.quantity)
        document.getElementById("clickpower").innerText = totalUpgrade
        // console.log(itembought.multiplier * (itembought.quantity++))
    } else {
        alert("you do not have enough gold")
    }
}


function drawGold() {
    document.getElementById("goldcount").innerText = gold
    if (gold >= 6666) {
        document.getElementById('charBeelzebubbtn').style.display = "block"
    }
}

function unlockCharacter(X) {
    let charbought = characters.find(c => c.name == X)
    if (gold >= charbought.price) {
        gold -= charbought.price
        charbought.quantity++
        charbought.price += (charbought.price * .15)
        switch (X) {
            case 'accountant':
                clearInterval(setInterval(accGold, charbought.duration))
                setInterval(accGold, charbought.duration)
                break
            case 'pyramid-scheme':
                clearInterval(pyrGold)
                setInterval(pyrGold, charbought.duration)
                break
            case 'Beelzebub':
                clearInterval(beeGold)
                setInterval(beeGold, 2000)
                break
        }
        drawGold()
        document.getElementById(`char${X}card`).style.display = "block"
        document.getElementById(`${X}count`).style.display = "block"
        document.getElementById(`char${X}btn`).style.display = "none"
        document.getElementById(`${X}stat`).innerHTML = (charbought.quantity * charbought.multiplier)
        let totalClick = 0
        let enabledcharacters = characters.filter(c => c.quantity >= 1)
        enabledcharacters.forEach(e => totalClick += Math.round((e.quantity * e.multiplier) / (e.duration / 1000)))
        document.getElementById('totalgps').innerText = totalClick
        document.getElementById('charstats').style.display = "block"
        document.getElementById('charbonus').style.display = "block"
        document.getElementById(`${X}upgrade`).innerText = charbought.price
    } else { alert("no bueno") }
}


drawGold()
// setInterval(accGold, 3000)

function stopinterval(X) {
    clearInterval(X)
}

setInterval(accGold, 3000)
