let infoBox = document.querySelector('#info-box')
let lootBtn = document.getElementById("loot-btn")
let rosterBtn = document.getElementById("roster-btn")

lootBtn.addEventListener('click', showLootRules)
rosterBtn.addEventListener('click', showRegisteredMembers)

function showLootRules(){
    infoBox.innerHTML = ""
    infoBox.innerHTML += "<div>Sup</div>"
}

function showRegisteredMembers(){
    infoBox.innerHTML = ""
    infoBox.innerHTML += "<table><tr><td>Lucella</td><td>Warrior (Prot)</td></tr></table>"
}

window.onload = showLootRules()