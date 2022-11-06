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
        duration: 2000,
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

let gold = 0
let finalgold = 0

function grabGold() {
    gold++
    finalgold++
    upgrades.forEach(u => gold += u.quantity * u.multiplier)
    upgrades.forEach(u => finalgold += u.quantity * u.multiplier)
    drawGold()
}

function accGold() {
    let a = characters.find(c => c.name == "accountant")
    gold += a.quantity * a.multiplier
    finalgold += a.quantity * a.multiplier
    drawGold()
}



function pyrGold() {
    let p = characters.find(c => c.name == "pyramid-scheme")
    gold += p.quantity * p.multiplier
    finalgold += p.quantity * p.multiplier
    drawGold()
}

function beeGold() {
    let b = characters.find(b => b.name == "Beelzebub")
    let fate = Math.round(Math.random())
    if (fate == 1) {
        gold += b.quantity * b.multiplier
        finalgold += b.quantity * b.multiplier
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
    if (finalgold >= 100000) {
        document.getElementById('charBeelzebubbtn').innerHTML = `<section class="row">
        <div class="col-7 btn btn-danger" onclick="unlockCharacter('Beelzebub')">
            <h5>Summon Beelzebub | 66666/h5>
            ?????????
        </div>
    </section>`}
    if (finalgold >= 20000) {
        document.getElementById("endworldbtn").style.display = "block"
    }
}

function unlockCharacter(X) {
    let charbought = characters.find(c => c.name == X)
    if (gold >= charbought.price) {
        document.getElementById("inventory").style.display = "block"
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
            document.getElementById('charbonus').style.display = "block"
            document.getElementById(`${X}stat`).innerHTML = (charbought.quantity * charbought.multiplier)
            document.getElementById(`${X}upgrade`).innerText = charbought.price
            document.getElementById(`${X}total`).innerText = charbought.quantity
        } else { alert("Im suprised you would summon a demon all willy-nilly like this, I know its just a game but still...") }
    } else { alert("no bueno") }
}


// setInterval(accGold, 3000)


setInterval(accGold, 3000)
setInterval(pyrGold, 12000)
setInterval(beeGold, 6666)
function test() { console.log(Math.round(Math.random() + 1)) }


let person = prompt("Hello, my name is localhost. What is your name?");

if (person != "") {
    document.getElementById("playername").innerHTML = `${person} <br>`
    setplayericon()
} else {
    document.getElementById("playername").innerHTML = `Mysterious One <br>`
    document.getElementById("playericon").innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/953/953789.png" class="char-img img-fluid"></img>`
    alert("Strong, silent type I see")
    document.getElementById("playerflavor").innerText = "the only thing I know about you is that you're going to be rich after a few clicks"
}


function setplayericon() {
    let icon = prompt("Cat or Dog?")
    if (icon != "Dog" && icon != "dog" && icon != "Cat" && icon != "cat") {
        alert("I think what you meant to say is that you are a lizard in a hoodie")
        document.getElementById("playericon").innerHTML = `<img src="https://m.media-amazon.com/images/I/51h5igYz+HL._AC_SY300_SX300_.jpg" class="char-img img-fluid"></img>`
        document.getElementById("playerflavor").innerText = "I really wish I was a lizard in a hoodie"
    }
    switch (icon) {
        case "cat": document.getElementById("playericon").innerHTML = `<img src="https://i.pinimg.com/originals/5a/2c/a7/5a2ca7ddaa861395c06246a23a9b58dd.jpg" class="char-img img-fluid"></img>`
            document.getElementById("playerflavor").innerText = "cool cats dont capitilize 'c's they capitilize gs "
            break
        case "Cat": document.getElementById("playericon").innerHTML = `<img src="https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled-650x711.jpg" class="char-img img-fluid"></img>`
            document.getElementById("playerflavor").innerText = "I ran out of clever ideas"
            break
        case "dog": document.getElementById("playericon").innerHTML = `<img src="http://mydogiscool.com/wp-content/uploads/2014/06/cool-dog-horiz.jpg" class="char-img img-fluid"></img>`
            document.getElementById("playerflavor").innerText = "cool dogs dont play fetch, they ARE fetch"
            break
        case "Dog": document.getElementById("playericon").innerHTML = `<img src="https://img.freepik.com/premium-photo/dog-dressed-business-suit_114106-1022.jpg?w=740" class="char-img img-fluid"></img>`
            document.getElementById("playerflavor").innerText = "...attorney at Paw"
            break
    }
}

function endworld() {
    clearInterval(accGold)
    clearInterval(pyrGold)
    clearInterval(beeGold)
    document.getElementById("earth").style.display = "none"
    document.getElementById("hell").style.display = "block"
    document.getElementById("finalgold").innerText = finalgold
}

drawGold()
