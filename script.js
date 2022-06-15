const buttonRules = document.querySelector(".btnRules");
const divRules  = document.querySelector(".rules")
    


function addLi(){
    const ul = document.createElement("ul");
    divRules.append(ul);
    fetch('becode.json')
        .then(response => response.json())
        .then(data => {
            for (let rules of data) {
                const li = document.createElement("li");
                ul.append(li);
                li.textContent = rules;
            };
        })
        .catch(error => {
            console.log("error");
        })
}

buttonRules.addEventListener("click", addLi)