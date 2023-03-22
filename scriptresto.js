var button = document.getElementById("toggle-button");
var hiddenInfo = document.getElementById("hidden-info");

button.addEventListener("click", function () {
  if (hiddenInfo.style.display === "none") {
    hiddenInfo.style.display = "block";
  } else {
    hiddenInfo.style.display = "none";
  }
});





// quand pn clique sur listeRestoGrille[i] on ouvre page-resto avec données listeRestoGrille[i]

const listeResto=document.querySelector(".grilleResto")

listeRestoGrille.addEventListener('click',()=>{
  function openNewPage() {
    window.open("./Projet-1-The-Wild-Eats/indexresto1.html");
}})
//--------------Nom resto
const nomResto= document.getElementsByClassName('nomresto');
nomResto.innerText=`${listeRestoGrille.nom}`

//---------------filtre

const filtre=document.querySelectorAll('li')
filtre.innerText=`${listeRestoGrille.prix} | ${listeRestoGrille.lien_page} | ${listeRestoGrille.type_nourriture} | ${listeRestoGrille.distance}`


//----------------- photo
const photoAssiette1=document.getElementsByClassName('photoassietteaxel1')
photoAssiette1.style.backgroundImange=`url (${listeRestoGrille.photoAssiette1})`

const photoAssiette1=document.getElementsByClassName('photoassietteaxel2')
photoAssiette1.style.backgroundImange=`url (${listeRestoGrille.photoAssiette2})`

const photoAssiette1=document.getElementsByClassName('photoassietteaxel3')
photoAssiette1.style.backgroundImange=`url (${listeRestoGrille.photoAssiette3})`
 
//----------------------paragraphe
const paragraphe =document.getElementsByClassName('paragraphe')
paragraphe.innerText=`${listeRestoGrille.description}  ${listeRestoGrille.descriptionAnglais} ${listeRestoGrille.descriptionBasque}`



//------------------------map









