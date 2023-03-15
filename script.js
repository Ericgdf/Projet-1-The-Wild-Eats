const grilleGénéral = document.querySelector(".grilleResto");

const listeRestoGrille = [
    {
        nom : "Miamiam",
        image : "https://placekitten.com/200/287",
        description : "test test test test test test",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Miamiam",
        image : "https://placekitten.com/200/287",
        description : "test test test test test test",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Miamiam",
        image : "https://placekitten.com/200/287",
        description : "test test test test test test",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Miamiam",
        image : "https://placekitten.com/200/287",
        description : "test test test test test test",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
   
   

]




function creerResto (titre, imageURL, description,prix, distance){

    // FOND création du fond de chaque Resto + ajout class fondGridResto
    const fondGridResto =  document.createElement("div");
    fondGridResto.classList.add("fondGridResto");
    grilleGénéral.appendChild(fondGridResto);
    
    //  IMAGE creation Photo + création class photoRestoGrille
    const photoRestoGrille = document.createElement("div");
    photoRestoGrille.style.backgroundImage = `url(${imageURL})`
    photoRestoGrille.classList.add("photoRestoGrille");
    fondGridResto.appendChild(photoRestoGrille);

    // TITRE Creation de la balise h2 + creation class nomRestoGrille
    const nomRestoGrille = document.createElement("h2");
    nomRestoGrille.classList.add("nomRestoGrille");
    nomRestoGrille.innerText = titre
    fondGridResto.appendChild(nomRestoGrille);

    // DESCRIPTION Creation de balise p + creation class descriptionRestoGrille
    const descriptionRestoGrille = document.createElement("p");
    descriptionRestoGrille.classList.add("descriptionRestoGrille");
    descriptionRestoGrille.innerText = description
    fondGridResto.appendChild(descriptionRestoGrille);

    // PRIX Creation de balise p + creation class prixRestoGrille
    const prixRestoGrille = document.createElement("p");
    prixRestoGrille.classList.add("prixRestoGrille");
    prixRestoGrille.innerText = prix
    fondGridResto.appendChild(prixRestoGrille);

    // DISTANCE Creation de balise p + creation class distanceRestoGrille
    const distanceRestoGrille = document.createElement("p");
    distanceRestoGrille.classList.add("distanceRestoGrille");
    distanceRestoGrille.innerText = distance;
    fondGridResto.appendChild(distanceRestoGrille);

}

for( let i = 0; i < listeRestoGrille.length; i++){
    creerResto(listeRestoGrille[i].nom,listeRestoGrille[i].image,listeRestoGrille[i].description,listeRestoGrille[i].prix,listeRestoGrille[i].distance,);
}