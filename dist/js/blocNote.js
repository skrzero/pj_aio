let input = document.getElementById("inputUser");
let ulList = document.getElementById("listeNotes");

function ajouterNote(){
    let text = input.value;
    let li = document.createElement("li");
    li.textContent = text;
    console.log(li);
    ulList.appendChild(li);
    input.value = "";
    console.log(ulList.textContent);
    
}

function date(){
    let dateInfo = new Date();
    let jour = date.getDate();
    let mois = date.getMonth();
    let annee = date.getFullYear();
}
