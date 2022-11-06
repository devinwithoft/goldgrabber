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
        quantity: 0,
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

let gold = 300000

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
    let fate = Math.round(Math.random())
    if (fate == 1) {
        gold += b.quantity * b.multiplier
    } else {
        gold -= b.quantity * b.multiplier
    }
    drawGold()
}

function buyUpgrade(X) {
    let itembought = upgrades.find(u => u.name == X)
    if (gold >= itembought.price) {
        gold -= itembought.price,
            itembought.quantity++
        itembought.price = Math.round(itembought.price + (itembought.price * .1))
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
    gold = Math.round(gold)
    document.getElementById("goldcount").innerText = gold
    if (gold >= 1) {
        document.getElementById('charBeelzebubbtn').innerHTML = `<section class="row">
        <div class="col-7 btn btn-warning" onclick="unlockCharacter('Beelzebub')">
            <h5>UNLOCK X</h5>
            explain x stats here
        </div>
    </section>`
    }
}

function unlockCharacter(X) {
    let charbought = characters.find(c => c.name == X)
    if (gold >= charbought.price) {
        debugger
        gold -= charbought.price
        charbought.quantity++
        charbought.price += Math.round(charbought.price * .1)
        drawGold()
        document.getElementById(`char${X}card`).style.display = "block"
        document.getElementById(`${X}count`).style.display = "block"
        document.getElementById(`char${X}btn`).style.display = "none"
        let totalClick = 0
        let enabledcharacters = characters.filter(c => c.quantity >= 1 && c.name != "Beelzebub")
        enabledcharacters.forEach(e => totalClick += Math.round((e.quantity * e.multiplier) / (e.duration / 1000)))
        document.getElementById('totalgps').innerText = totalClick
        if (charbought.name != 'Beelzebub') {
            document.getElementById('charstats').style.display = "block"
            document.getElementById(`${X}stat`).innerHTML = (charbought.quantity * charbought.multiplier)
            document.getElementById('charbonus').style.display = "block"
            document.getElementById(`${X}upgrade`).innerText = charbought.price
        }
    } else { alert("no bueno") }
}


drawGold()
// setInterval(accGold, 3000)

function stopinterval(X) {
    clearInterval(X)
}

setInterval(accGold, 3000)
setInterval(pyrGold, 12000)
setInterval(beeGold, 1000)
function test() { console.log(Math.round(Math.random() + 1)) }

