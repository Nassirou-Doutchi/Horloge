// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

let date = new Date();

let second = date.getSeconds();
let secDeg = second * 6; // degré de rotation de l aiguille seconde le calcul est simple (360°/60s)

let minute = date.getMinutes();
let minDeg = minute * 0.1 * 60; //(le calcul du degrè rotation est égal à 360/3600 = 0.1)

let heure =date.getHours();
let heureDeg = heure * 0.00833 * 3600; // (le calcul du degrè de rotation est égal à 360°/(3600*12)  )
//Extraire l'heure actuel à l'aide de l'objet Date()


//Ajouter l'heure , minite , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

function demarrerLaMontre() {
    secDeg = secDeg + 6;
    minDeg = minDeg + 0.1;
    heureDeg = heureDeg + 0.00833;

    AIGUILLESEC.style.transform = "rotate(" + secDeg + "deg)";
    AIGUILLEMIN.style.transform = "rotate(" + minDeg + "deg)";
    AIGUILLEHR.style.transform = "rotate(" + heureDeg + "deg)";

}

  // Exercuter la fonction chaque second
  var interval = setInterval(demarrerLaMontre, 1000);