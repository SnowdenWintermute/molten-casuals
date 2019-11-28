let infoBox = document.querySelector('#info-box')
let lootBtn = document.getElementById("loot-btn")
let rosterBtn = document.getElementById("roster-btn")

lootBtn.addEventListener('click', showLootRules)
rosterBtn.addEventListener('click', showRegisteredMembers)

let lootRules = document.getElementById('loot-rules')
let members = document.getElementById('members')
function showLootRules(){
    lootRules.setAttribute("style", "display:block")
    members.setAttribute("style", "display:none")
}

function showRegisteredMembers(){
    lootRules.setAttribute("style", "display: none;")
    members.setAttribute("style", "display: block;")
}

function getClassColor(characterClass){
    switch(characterClass){
        case "Warrior":
            return "#C79C6E"
        case "Warlock":
            return "#8787ED"
        case "Mage":
            return "#40C7EB"
        case "Rogue":
            return "#FFF569"
        case "Paladin":
            return "#F58CBA"
        case "Priest":
            return "#FFFFFF"
        case "Druid":
            return "#FF7D0A"
        default:
            return "#ddd"
    }
}

function populateMembers(){
    let membersTable = document.getElementById('members-table')
    let registeredNum = document.getElementById('registered-num')
    registeredNum.innerHTML = `Registered: ${membersList.length}/40`
    membersList.forEach(mem => {
        let classColor = getClassColor(mem.characterClass)
        let displayedSpec = mem.spec? ` (${mem.spec})`:""
        membersTable.innerHTML += `<tr style="color:${classColor}"><td>${mem.name}</td><td>${mem.characterClass}${displayedSpec}</td><td>${mem.guild}</td></tr>`
    })

}


function init(){
    showLootRules()
    populateMembers()
}

window.onload = init()