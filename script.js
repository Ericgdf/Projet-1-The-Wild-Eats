const grilleGénéral = document.querySelector(".grilleResto");

const listeRestoGrille = [
    {
        nom : "Chez Paqui",
        image : "https://i0.wp.com/apprendre-les-bonnes-manieres.com/wp-content/uploads/2016/03/assiette-finir-son-assiette-%C3%A0-table-arts-de-la-table-gastronomie-savoir-vivre-%C3%A9tiquette-politesse-gaspillage-allergie-protocole-bonnes-mani%C3%A8res-usages-arts-et-mani%C3%A8res.jpg?ssl=1",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Mireille miam",
        image : "https://previews.123rf.com/images/derkien/derkien1711/derkien171100004/89704744-steak-de-saumon-grill%C3%A9-avec-salade-de-l%C3%A9gumes-sur-une-assiette-repas-de-fruits-de-mer-gourmet-%C3%A0.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Chez Paqui",
        image : "https://i0.wp.com/apprendre-les-bonnes-manieres.com/wp-content/uploads/2016/03/assiette-finir-son-assiette-%C3%A0-table-arts-de-la-table-gastronomie-savoir-vivre-%C3%A9tiquette-politesse-gaspillage-allergie-protocole-bonnes-mani%C3%A8res-usages-arts-et-mani%C3%A8res.jpg?ssl=1",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Mireille miam",
        image : "https://previews.123rf.com/images/derkien/derkien1711/derkien171100004/89704744-steak-de-saumon-grill%C3%A9-avec-salade-de-l%C3%A9gumes-sur-une-assiette-repas-de-fruits-de-mer-gourmet-%C3%A0.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Chez Paqui",
        image : "https://i0.wp.com/apprendre-les-bonnes-manieres.com/wp-content/uploads/2016/03/assiette-finir-son-assiette-%C3%A0-table-arts-de-la-table-gastronomie-savoir-vivre-%C3%A9tiquette-politesse-gaspillage-allergie-protocole-bonnes-mani%C3%A8res-usages-arts-et-mani%C3%A8res.jpg?ssl=1",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Mireille miam",
        image : "https://previews.123rf.com/images/derkien/derkien1711/derkien171100004/89704744-steak-de-saumon-grill%C3%A9-avec-salade-de-l%C3%A9gumes-sur-une-assiette-repas-de-fruits-de-mer-gourmet-%C3%A0.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Chez Paqui",
        image : "https://i0.wp.com/apprendre-les-bonnes-manieres.com/wp-content/uploads/2016/03/assiette-finir-son-assiette-%C3%A0-table-arts-de-la-table-gastronomie-savoir-vivre-%C3%A9tiquette-politesse-gaspillage-allergie-protocole-bonnes-mani%C3%A8res-usages-arts-et-mani%C3%A8res.jpg?ssl=1",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Mireille miam",
        image : "https://previews.123rf.com/images/derkien/derkien1711/derkien171100004/89704744-steak-de-saumon-grill%C3%A9-avec-salade-de-l%C3%A9gumes-sur-une-assiette-repas-de-fruits-de-mer-gourmet-%C3%A0.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Chez Paqui",
        image : "https://i0.wp.com/apprendre-les-bonnes-manieres.com/wp-content/uploads/2016/03/assiette-finir-son-assiette-%C3%A0-table-arts-de-la-table-gastronomie-savoir-vivre-%C3%A9tiquette-politesse-gaspillage-allergie-protocole-bonnes-mani%C3%A8res-usages-arts-et-mani%C3%A8res.jpg?ssl=1",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Mireille miam",
        image : "https://previews.123rf.com/images/derkien/derkien1711/derkien171100004/89704744-steak-de-saumon-grill%C3%A9-avec-salade-de-l%C3%A9gumes-sur-une-assiette-repas-de-fruits-de-mer-gourmet-%C3%A0.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Chez Paqui",
        image : "https://i0.wp.com/apprendre-les-bonnes-manieres.com/wp-content/uploads/2016/03/assiette-finir-son-assiette-%C3%A0-table-arts-de-la-table-gastronomie-savoir-vivre-%C3%A9tiquette-politesse-gaspillage-allergie-protocole-bonnes-mani%C3%A8res-usages-arts-et-mani%C3%A8res.jpg?ssl=1",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        prix : "€€",
        distance : 5,
        type_nouriture : "Asiatique",
        lien_page : "blabla"
    },
    {
        nom : "Mireille miam",
        image : "https://previews.123rf.com/images/derkien/derkien1711/derkien171100004/89704744-steak-de-saumon-grill%C3%A9-avec-salade-de-l%C3%A9gumes-sur-une-assiette-repas-de-fruits-de-mer-gourmet-%C3%A0.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
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

    // ZONE création d'une div pour prix et distance + ajout class sectionInfoGrille
    const sectionInfoGrille =  document.createElement("div");
    sectionInfoGrille.classList.add("sectionInfoGrille");
    fondGridResto.appendChild(sectionInfoGrille);


    // PRIX Creation de balise p + creation class prixRestoGrille
    const prixRestoGrille = document.createElement("p");
    prixRestoGrille.classList.add("prixRestoGrille");
    prixRestoGrille.innerText = prix
    sectionInfoGrille.appendChild(prixRestoGrille);

    // DISTANCE Creation de balise p + creation class distanceRestoGrille
    const distanceRestoGrille = document.createElement("p");
    distanceRestoGrille.classList.add("distanceRestoGrille");
    distanceRestoGrille.innerText = `|| ${distance} min de marche`;
    sectionInfoGrille.appendChild(distanceRestoGrille);

}

for( let i = 0; i < listeRestoGrille.length; i++){
    creerResto(listeRestoGrille[i].nom,listeRestoGrille[i].image,listeRestoGrille[i].description,listeRestoGrille[i].prix,listeRestoGrille[i].distance,);
}

