//fetch(`https://api.agify.io/?name=`)
const btnName = document.querySelector(".btnName")
const sectionPays =document.getElementById("pays")

let listName = document.querySelector(".listName");
let inputName = document.getElementById("name")

let data = []

async function fetchName (){
    try{
        let response = await fetch(`https://api.agify.io/?name=${inputName.value}&country_id=${sectionPays.value}`);
        data = await response.json();
        displayName();
    }
    catch (e){
        console.log(e)
    }
}

function displayName() {
    const createDiv = document.createElement("div")
    listName.prepend(createDiv);
    createDiv.innerHTML = `La prédiction du nom ${data.name} est de ${data.age} ans en ${data.country_id}</p>`
}

btnName.addEventListener("click",() => {fetchName()})