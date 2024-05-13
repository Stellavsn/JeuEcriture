
function afficherResultat(score,nbMotsProposes){
    let spanScore = document.querySelector(".zoneScore span")

    let affichageScore =`${score}/ ${nbMotsProposes}`

    spanScore.innerText=affichageScore}

function afficherProposition(proposition){
    let divZoneProposition=document.querySelector(".zoneProposition");
        divZoneProposition.innerText = proposition
}

function lancerJeu(){
    let score=0
    let nombreTotalMots=0
    let i=0

let btnValiderMot = document.getElementById("btnValiderMot");
let inputEcriture = document.getElementById("inputEcriture");

    afficherProposition(listeMots[i])
    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value)
        if (inputEcriture.value === listeMots[i]) {
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value =''

        if (listeMots[i] === undefined){
            afficherProposition("Le jeu est terminé !")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeMots[i])
        }
        })
}
