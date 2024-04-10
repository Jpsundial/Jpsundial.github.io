
let i;
let n;

const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const Compteur = document.querySelector("#compteur");
const Legende = document.querySelector("#legende");
const Compteur_2 = document.querySelector("#compteur_2");
const Legende_2 = document.querySelector("#legende_2");

var C_arr = new Array();
var L_arr = new Array();

L_arr[0] =" Données brutes et courbes d'égales déclinaisons ( de bleu solstice d'hiver à rouge solstice d'été ).";
L_arr[1] =" Données brutes: courbes d'égales déclinaisons monochromes et méridienne de temps solaire moyen.";
L_arr[2] =" Focus sur la méridienne de temps solaire moyen.";
L_arr[3] =" Méridienne de temps solaire moyen avec droites horaires des minutes.";
L_arr[4] =" Données brutes, heures temporaires, heures babyloniques et heures italiques.";
L_arr[5] =" Données brutes et table du cadran paramètrée.";
L_arr[6] =" Focus sur la table du cadran.";
L_arr[7] =" Heures moyennes: année complète.";
L_arr[8] =" Heures moyennes: hiver et printemps.";
L_arr[9] =" Heures moyennes: été et automne.";
L_arr[10] =" Heures temporaires.";
L_arr[11] =" Focus sur les heures temporaires.";
L_arr[12] =" Heures babyloniques.";
L_arr[13] =" Focus sur les heures babyloniques.";
L_arr[14] =" Heures italiques.";
L_arr[15] =" Focus sur les heures italiques.";
L_arr[16] =" Heures sidérales: année complète.";
L_arr[17] =" Heures sidérales: hiver et printemps.";
L_arr[18] =" Heures sidérales: été et automne.";
L_arr[19] =" Coordonnées horizontales du soleil: azimuts et hauteurs.";
L_arr[20] =" Coordonnées horizontales du soleil: droites d'azimuts.";
L_arr[21] =" Coordonnées horizontales du soleil: courbes de hauteurs.";
L_arr[22] =" Courbe de correction pour l'équation du temps.";
L_arr[23] =" Dimensions d'un style triangulaire.";
L_arr[24] =" Style droit pour les heures temporaires, babyloniques, italiques, sidérales et coordonnées polaires.";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");
    newIndex = calcNextSlide + [...slides].indexOf(slideActive);
    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    i = newIndex;
    n = newIndex;

    if (i < 9) {
      C_arr[i] = "0" + [n + 1] + "/25";
    } else {
      C_arr[i] = [n + 1] + "/25";
    }
        
    Compteur.innerHTML = C_arr[i];
    Compteur_2.innerHTML = C_arr[i];
    Legende.innerHTML = L_arr[i];
    Legende_2.innerHTML = L_arr[i];
    slides[newIndex].classList.add("active");
    slideActive.classList.remove("active");
  });
});