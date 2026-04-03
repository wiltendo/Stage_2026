const valider = document.getElementById('submit');
if (document.getElementById('mdp')!=null){
    document.getElementById('mdp').addEventListener('input', () => {valid("mdp",8,[true,true,true,true,true])});
    document.getElementById('mdp').addEventListener("mouseover", function(event) {changeDisplay(event,"Valid_mdp")});
    document.getElementById('mdp').addEventListener("mouseout", function(event) {changeDisplay(event,"Valid_mdp")});
}

if (document.getElementById('name')!=null){
    document.getElementById('name').addEventListener('input', () => {valid("name",5,[true,true,true,false,false])});
    document.getElementById('name').addEventListener("mouseover", function(event) {changeDisplay(event,"Valid_name")});
    document.getElementById('name').addEventListener("mouseout", function(event) {changeDisplay(event,"Valid_name")});
}

if (document.getElementById('Prénom')!=null){
    document.getElementById('Prénom').addEventListener('input', () => {valid("Prénom",3,[true,true,true,false,false])});
    document.getElementById('Prénom').addEventListener("mouseover", function(event) {changeDisplay(event,"Valid_Prénom")});
    document.getElementById('Prénom').addEventListener("mouseout", function(event) {changeDisplay(event,"Valid_Prénom")});
}

const Valider = {};

function valid(element,longueur,condition){
    const mdp = document.getElementById(element).value;
    const lengthCritere = mdp.length >= longueur;
    const majusculeCritere = /[A-Z]/.test(mdp);
    const minusculeCritere = /[a-z]/.test(mdp);
    const chiffreCritere = /[0-9]/.test(mdp);
    const specialCritere = /[%?*#!_-]/.test(mdp);

    // Mettre à jour les classes des critères
    updateCritere('length_'+element, lengthCritere == condition[0]);
    updateCritere('majuscule_'+element, majusculeCritere == condition[1]);
    updateCritere('minuscule_'+element, minusculeCritere == condition[2]);
    updateCritere('chiffre_'+element, chiffreCritere == condition[3]);
    updateCritere('special_'+element, specialCritere == condition[4]);

    if (Valider[element] == null){
        Valider[element] = false;
    }

    if (lengthCritere == condition[0] && 
        majusculeCritere == condition[1] &&        
        minusculeCritere == condition[2] && 
        chiffreCritere == condition[3] && 
        specialCritere == condition[4]){
        Valider[element] = true;
    } else {
        Valider[element] = false;
    }

    console.log(Valider)
    console.log(Object.values(Valider).every(value => value === true))
    if(Object.values(Valider).every(value => value === true)){
        valider.disabled=false;
    } else {
        valider.disabled=true;
    }
}

function updateCritere(id, isValid) {
    const element = document.getElementById(id);
    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

function changeDisplay(event,id_cible) {
  if (event.type === "mouseover") {
    document.getElementById(id_cible).style.display = "block";
  } else {
    document.getElementById(id_cible).style.display = "none";
  }
}

