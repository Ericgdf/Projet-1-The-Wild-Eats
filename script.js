const grilleGénéral = document.querySelector(".grilleResto");

const listeRestoGrille = [
    {
      "nom": "Restaurant Chez Paqui",
      "image":
        "https://assets.afcdn.com/recipe/20161116/7224_w1024h1024c1cx1972cy3850.webp",
      "description": "Réservations, Places assises, Service de table, Plats à emporter, Terrasse, Stationnement pour clientèle, Parking privé gratuit.",
      "descriptionPageResto":
        "Réservations, Places assises, Service de table, Plats à emporter, Terrasse, Stationnement pour clientèle, Parking privé gratuit, Accessible en fauteuil roulant, Sert de l'alcool, Bières & Vins, Paiements électroniques, Wi-Fi gratuit, Accepte les cartes bancaires, Style familial",
      "descriptionAnglais":
        "Reservations, Seating, Table Service, Takeout, Outdoor Seating, Guest Parking, Free Off-Street Parking, Wheelchair Accessible, Serves Alcohol, Wine & Beer, Electronic Payments, Free Wifi, Accepts Credit Cards , Family Style",
      "descriptionBasque":
        "Erreserbak, Eserlekuak, Mahai-zerbitzua, Eramateko janaria, Kanpoko eserlekuak, Gonbidatuen aparkalekua, Doako kaleko aparkalekua, Gurpil-aulkirako sarbidea, Alkohola, Ardoa eta Garagardoa zerbitzatzen du, Ordainketa elektronikoak, Doako wifia, Kreditu txartelak onartzen ditu, Familia estiloa",
      "prix": "€€",
      "distance": 5,
      "type_nouriture": "Traditionnel",
      "lien_page": "http://127.0.0.1:5501/indexresto1.html",
      "photoAssiette1":
        "https://lh5.googleusercontent.com/p/AF1QipNHnRrmz-hEIqBo0xaQv2fCK8HVoDfulqGvkew3=w500-h500-k-no",
      "photoAssiette2":
        "https://lh5.googleusercontent.com/p/AF1QipPBAm5aOYuYLHkuIJDl-IwW7WqAMoxP76j4a4L_=w740-h420-k-no",
      "photoAssiette3":
        "https://menu.sluurpy.com/immagini/locali/thumbs/1981952.jpg"
    },
    {
      "nom": "Le Cass du Siècle",
      "image": "https://img.cuisineaz.com/660x660/2022/07/18/i184733-shutterstock-95710738.jpeg",
      "description": "Super restaurant, très bon accueil, un menu variés, très bonne cuisine, un régal pour les papilles, merci",
      "descriptionAnglais": "Great restaurant, very warm welcome, a varied menu, very good cuisine, a treat for the taste buds, thank you",
      "descriptionBasque": "Jatetxe bikaina, harrera oso beroa, menu anitza, sukaldaritza oso ona, zaporeentzako gozamena, eskerrik asko",
      "prix": "€€",
      "distance": 8,
      "type_nouriture": "Traditionnel", 
      "lien_page": "https://www.facebook.com/CassDuSiecleAnglet",
      "photoAssiette1": "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/316283890_546492424154688_5347097983910201712_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=tVD8MBlxzr4AX9hlMsr&_nc_ht=scontent-cdg2-1.xx&oh=00_AfBDqlZvcTQMy7EHae0bO5p6G7bbUoof1k1Shs1hj-MS9Q&oe=641736C9",
      "photoAssiette2": "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/308786609_496374632499801_4199631945948914933_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=U86C_1F1UFAAX9-pgrB&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCSb5Zu7maPqi6IYDaohyIvi8YELc3iWzEI23dl-aG_fw&oe=64176555",
      "photoAssiette3": "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/288553419_602541338132917_3284869892699869838_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Y3NeiRjgMh4AX_b4pXo&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCPQ8eZDUYQrMkLMWPcYA4IQNi8ogr5s6oRO7KZezzeyA&oe=64171E7B"
    },
    {
      "nom": "Les Délices de Maignon",
      "image": "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2019/05/21152632/sandwichs-au-rosbif.jpg",
      "description": "Dès l'ouverture café et viennoiseries .Vous trouverez ensuite un large choix de sandwichs froids ou chauds, de burgers, de salades, d'assiettes combinées,plat du jour , desserts etc.....le tout sur place où à emporter.",
      "descriptionAnglais": "From the opening coffee and pastries.You will then find a wide choice of cold or hot sandwiches, burgers, salads, combined plates, dish of the day, desserts etc... all on site or to take away.",
      "descriptionBasque": "Hasierako kafea eta gozogintza.Ondoren, ogitarteko hotzak edo beroak, hanburgesak, entsaladak, plater konbinatuak, eguneko platerak, postreak etab... aukera zabala aurkituko duzu bertan edo eramateko.",
      "prix": "€",
      "distance": 5,
      "type_nouriture": "Snack",
      "lien_page": "https://www.facebook.com/profile.php?id=100057340873856",
      "photoAssiette1": "https://scontent-cdg4-1.xx.fbcdn.net/v/t1.6435-9/37349026_498389590600081_1975882258367643648_n.jpg?stp=c338.0.640.640a_dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=SObuZ1q8g8QAX-JHyYf&_nc_ht=scontent-cdg4-1.xx&oh=00_AfAi-bTTM4S42vYbzk2VDzI4OKat9isYY1BFobgiXNLLyQ&oe=643A5F07",
      "photoAssiette2": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/37301803_498389507266756_7308535106442887168_n.jpg?stp=c338.0.640.640a_dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=S6bpgFES0WwAX-AIjaj&_nc_ht=scontent-cdg2-1.xx&oh=00_AfDSDRhQrltCQPA_O7FZqnzL-03FHfY8Th6wC1ViAXkwSQ&oe=643A6F8C",
      "photoAssiette3": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/37234955_498389463933427_2704294886269517824_n.jpg?stp=c338.0.640.640a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=t89dcMxfyCMAX_tU5vx&_nc_ht=scontent-cdg2-1.xx&oh=00_AfBAy70ZXnJ88QQ1qKzDyiMyiPl-FCivydmCn96hhMVzjg&oe=643A5D67"
    },
    {
      "nom": "Boulangerie T'M le pain",
      "image": "https://cache.marieclaire.fr/data/photo/w1000_ci/1jw/recettes-faciles-de-tartes-salees.jpg",
      "description": "Vitrine magnifique, grand espace pour se restaurer. Ne demande qu'a être connu. Viennoiserie maison sans aucun doute. Pain excellent (farine bio). Accueillant et chaleureux.",
      "descriptionAnglais": "Magnificent showcase, large space to eat. Just asks to be known. Homemade pastries without a doubt. Excellent bread (organic flour). Welcoming and warm.",
      "descriptionBasque": "Erakusleiho bikaina, jateko leku handia. Jakina izatea besterik ez du eskatzen. Etxeko opilak dudarik gabe. Ogi bikaina (irin ekologikoa). Abegitsua eta beroa.",
      "prix": "€",
      "distance": 38,
      "type_nouriture": "Boulangerie",
      "lien_page": "blabla",
      "photoAssiette1": "https://lh3.googleusercontent.com/p/AF1QipMNbiG7MO0NBe7jZQnxSK825mj88Ow_YPhg1hDk=s1360-w1360-h1020",
      "photoAssiette2": "https://lh5.googleusercontent.com/p/AF1QipMgzcFtWnjaKu9dCa8ofvhDCVUKbpCeClvaDWj-=w141-h101-n-k-no-nu",
      "photoAssiette3": "https://lh3.googleusercontent.com/p/AF1QipN4JZLUDHdialVZnBZpGJGe7r1ylJ01tZdKFmcf=s1360-w1360-h1020"
    },
    {
      "nom": "M Vagabond",
      "image": "https://www.gardengourmet.ch/sites/default/files/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg",
      "description": "Mr Vagabond, c’est un groupe de restaurants et de Food-Trucks basés dans le sud-ouest de la France et spécialisés dans les burgers. Avec une forte volonté de travailler avec les producteurs locaux, chaque entité possède ses propres fournisseurs afin de vous fournir les meilleurs produits tout en favorisant au maximum les circuits courts.",
      "descriptionAnglais": "Mr Vagabond is a group of restaurants and Food-Trucks based in the southwest of France and specialized in burgers. With a strong desire to work with local producers, each entity has its own suppliers in order to provide you with the best products while promoting short circuits as much as possible.",
      "descriptionBasque": "Mr Vagabond Frantziako hego-mendebaldean kokatutako jatetxe eta Food-Trucks talde bat da eta hanburgesetan espezializatua. Bertako ekoizleekin lan egiteko gogo biziarekin, entitate bakoitzak bere hornitzaileak ditu produktu onenak eskaintzeko, zirkuitu laburrak ahalik eta gehien sustatuz.",
      "prix": "€€",
      "distance": 40,
      "type_nouriture": "Burger",
      "lien_page": "http://mr-vagabond.net/",
      "photoAssiette1": "https://lh3.googleusercontent.com/p/AF1QipOUBtsdbW0S-zk8BQ9655xnkVgCaMxCzZyJpaq7=s1360-w1360-h1020",
      "photoAssiette2": "https://lh3.googleusercontent.com/p/AF1QipMYokwDDmwcNW_69KlImgT8Bd6uRbrGOubPPZMF=s1360-w1360-h1020",
      "photoAssiette3": "https://lh3.googleusercontent.com/p/AF1QipMNLp5-I99CJG-Vbe4QW6WW3_0PNIViOFr8iB0s=s1360-w1360-h1020"
    },
    {
      "nom": "Pépé Joe",
      "image": "https://img.cuisineaz.com/660x660/2018/02/28/i136025-pizza-legere.jpeg",
      "description": "Ce restaurant orné de journaux propose une carte de pizzas et de hamburgers à manger sur place et à emporter.",
      "descriptionAnglais": "This restaurant adorned with newspapers offers a menu of pizzas and burgers to eat in and take out.",
      "descriptionBasque": "Egunkariz apainduta dagoen jatetxe honek pizza eta hanburgesa menua eskaintzen du jan eta ateratzeko.",
      "prix": "€€",
      "distance": 38,
      "type_nouriture": "Burger",
      "lien_page": "https://www.pepejoe.fr/",
      "photoAssiette1": "https://lh3.googleusercontent.com/p/AF1QipP0WTPKZ-33WPiCiXntc0EGJSgdSU622vUEjpuJ=s1360-w1360-h1020",
      "photoAssiette2": "https://lh3.googleusercontent.com/p/AF1QipPWFBqdXoYoNfPVFjQ3u5KAEUTr_xEqNLcc7gok=s1360-w1360-h1020",
      "photoAssiette3": "https://lh3.googleusercontent.com/p/AF1QipPFnt6Q44miNYGqEnFWzy3bUTGU3L2Z67F5ES2e=s1360-w1360-h1020"
    },
    {
      "nom": "Woody's Diner",
      "image": "https://pbs.twimg.com/media/EFyTw6kWoAYa3Yx?format=jpg&name=large",
      "description": "Le Woody’s Diner devra être le seul à proposer des Burgers d’une telle qualité et originalité dans ce type de concept.. Les recettes seront crées, développées et mises au point à partir de cette date en n’oubliant pas la “French Touch”.",
      "descriptionAnglais": "Woody's Diner will have to be the only one to offer Burgers of such quality and originality in this type of concept. The recipes will be created, developed and finalized from this date, not forgetting the French Touch .",
      "descriptionBasque": "Woody's Diner-ek izan beharko du halako kalitate eta originaltasuneko hanburgesak eskaintzen dituen bakarra kontzeptu mota honetan.Errezetak sortu, garatu eta amaituko dira data honetatik aurrera, French Touch-a ahaztu gabe.",
      "prix": "€€",
      "distance": 5,
      "type_nouriture": "Burger",
      "lien_page": "https://woodys-diner.com/",
      "photoAssiette1": "https://lh3.googleusercontent.com/p/AF1QipOCx8Td17ti9DQsCFbs2mwiFkJ7sETjiLJKtJHW=s1360-w1360-h1020",
      "photoAssiette2": "https://lh3.googleusercontent.com/p/AF1QipN0UEWH8u7uoV503ziacfAZzmvni8IRL8-PDS5m=s1360-w1360-h1020",
      "photoAssiette3": "https://lh3.googleusercontent.com/p/AF1QipNHGkh7dtmGG4OM2v97H-xEooYtY22bqSNRCqDR=s1360-w1360-h1020"
    },
    {
      "nom": "Côté Sushi",
      "image": "https://lh3.googleusercontent.com/p/AF1QipOY1dZoLRZNd9l6FyfyNPEOzig_y36Xt6w-Nn9d=s680-w680-h510",
      "description": "Au menu : toutes les spécialités du pays du soleil levant fraîchement cuisinées, raviront vos papilles et vous feront voyager.",
      "descriptionAnglais": "On the menu: all the specialties of the land of the rising sun, freshly cooked, will delight your taste buds and make you travel.",
      "descriptionBasque": "Menuan: Eguzkiaren lurraldeko espezialitate guztiek, prestatu berriak, gustura gozatuko dute eta bidaiatu egingo zaituzte.",
      "prix": "€€€",
      "distance": 38,
      "type_nouriture": "Asiatique",
      "lien_page": "https://cotesushi.com/restaurants/743-cote-sushi-anglet",
      "photoAssiette1": "https://lh3.googleusercontent.com/p/AF1QipPh1ijGIrULpPvopFtq0eiwQPHC5hR8y8njqJuc=s1360-w1360-h1020",
      "photoAssiette2": "https://lh3.googleusercontent.com/p/AF1QipMd9eZl3kqBj29nGjEtUaq5yr1hmMbprrZIejgT=s1360-w1360-h1020",
      "photoAssiette3": "https://lh3.googleusercontent.com/p/AF1QipM6Y_ksAxbxpREZjQ4QPK52Ge5BYx-1lGJ4HCmg=s1360-w1360-h1020"
    },
    {
      "nom": "Restaurant Atea",
      "image": "https://fichier0.cirkwi.com/image/photo/poi/800x500/889794/fr/3.jpg?1672555629",
      "description": "Le restaurant ATEA propose à sa clientèle une cuisine traditionnelle recherchée, dont les plats sont élaborés à partir de produits frais du terroir. Saveur et authenticité au restaurant ATEA de l’hôtel les Genêts.",
      "descriptionAnglais": "The ATEA restaurant offers its customers refined traditional cuisine, the dishes of which are made from fresh local produce. Flavor and authenticity at the ATEA restaurant of the Hotel les Genêts.",
      "descriptionBasque": "ATEA jatetxeak sukaldaritza tradizional findua eskaintzen die bezeroei, bertako produktu freskoekin egindako platerak. Zaporea eta benetakotasuna Hotel les Genêts-eko ATEA jatetxean.",
      "prix": "€€",
      "distance": 18,
      "type_nouriture": "Traditionnel",
      "lien_page": "https://www.hotel-les-genets.com/le-restaurant-atea/",
      "photoAssiette1": "https://cdt64.media.tourinsoft.eu/upload/Atea-1.JPG",
      "photoAssiette2": "https://www.hotel-les-genets.com/wp-content/uploads/sites/126/2020/09/RESTAU6__001-scaled.jpg",
      "photoAssiette3": "https://img.restaurantguru.com/c30b-Atea-Restaurant-photo.jpg"
    },
    {
      "nom": "Aux Enfants Gatés",
      "image": "https://cdn.metro-online.com/-/media/Project/MCW/FR_Metro/Images/services-inspirations/inspirations/tendances/snacking/content/snacking-burger.jpg?h=299&iar=0&w=440&rev=90d3a706a12d4cfa85d5d75a607ec9df&hash=7F5838AEE532EA64C6FF9173229E4CB0",
      "description": "Notre boulangerie-pâtisserie Aux Enfants Gâtés est avant tout une histoire de famille, un rappel à l’enfance au travers de notre pain, nos gâteaux, nos encas raffinés et nos viennoiseries maison.Tout ici est réuni pour simplement répondre à vos envies!",
      "descriptionAnglais": "Our “Aux Enfants Gâtés” bakery and pastry shop is above all a family story, a reminder of childhood through our bread, our cakes, our refined snacks and our homemade pastries.Everything here is gathered to simply meet your desires!",
      "descriptionBasque": "Gure “Aux Enfants Gâtés” okindegia eta gozotegia, batez ere, familiaren istorio bat da, haurtzaroaren oroigarri bat gure ogiaren, gure opilen, gure pintxo finen eta etxeko opilen bidez.Hemen dena bilduta dago zure nahiak asetzeko!",
      "prix": "€",
      "distance": 54,
      "type_nouriture": "Boulangerie",
      "lien_page": "https://www.facebook.com/AuxEnfantsGatesAnglet",
      "photoAssiette1": "https://lh3.googleusercontent.com/p/AF1QipO1RSFa7nNGwHV8YmTez41w2dVYHTpg5FNuWJ4h=s1360-w1360-h1020",
      "photoAssiette2": "https://lh3.googleusercontent.com/p/AF1QipO1BXlfk25MlDHkp6GvO5PB3azu7K9cWLKOUE67=s1360-w1360-h1020",
      "photoAssiette3": "https://lh3.googleusercontent.com/p/AF1QipMQC-m6rNg2jZbxly1sQsCsarrDY9f87GXwKsk8=s1360-w1360-h1020"
    },
    {
      "nom": "Le Quatre",
      "image": "https://www.healthyfoodcreation.fr/wp-content/uploads/2020/06/DSC_0472-scaled.jpg",
      "description": " vous trouverez des viennoiseries, des grands classiques de la pâtisserie mais aussi des versions revisitées, un large éventail de pains et un côté « snacking ». Des saveurs et des textures pour toutes les envies, à tout moment de la journée et toujours des nouveautés. ",
      "descriptionAnglais": "you will find pastries, great pastry classics but also revisited versions, a wide range of breads and a “snacking” side. Flavors and textures for all tastes, at any time of the day and always new.",
      "descriptionBasque": "opilak, gozogintza klasiko bikainak baina bertsio berrituak ere, ogi sorta zabala eta “merienda” aldea aurkituko dituzu. Gustu guztietarako zapore eta testurak, eguneko edozein ordutan eta beti berriak.",
      "prix": "€",
      "distance": 7,
      "type_nouriture": "Boulangerie",
      "lien_page": "https://www.myboulange.fr/64/anglet/le-quatre-33599",
      "photoAssiette1": "https://lh3.googleusercontent.com/p/AF1QipNPaOFQZNOCQskTanzzwgw4mCI9E5NAvecH6aUW=s1360-w1360-h1020",
      "photoAssiette2": "https://lh3.googleusercontent.com/p/AF1QipN21waAGOxKWOYs2-a_EAGyPiiYZejYB8g0Fzke=s1360-w1360-h1020",
      "photoAssiette3": "https://lh3.googleusercontent.com/p/AF1QipPE8MxqYV_nkImhsg-P_qCkp4h2vj1aggEiv2-s=s1360-w1360-h1020"
    }
  
  ]




function creerResto (titre, imageURL, description,prix, distance,lien){

    // FOND création du fond de chaque Resto + ajout class fondGridResto
    const fondGridResto =  document.createElement("div");
    fondGridResto.classList.add("fondGridResto");
    grilleGénéral.appendChild(fondGridResto);
    
    // LIEN VERS RESTO + ajout class linkGridResto
    //
    const linkGridResto = document.createElement("a");
    linkGridResto.setAttribute("href",lien);
    fondGridResto.appendChild(linkGridResto); 


    
    //  IMAGE creation Photo + création class photoRestoGrille
    const photoRestoGrille = document.createElement("div");
    photoRestoGrille.style.backgroundImage = `url(${imageURL})`
    photoRestoGrille.classList.add("photoRestoGrille");
    linkGridResto.appendChild(photoRestoGrille);

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
    creerResto(listeRestoGrille[i].nom,listeRestoGrille[i].image,listeRestoGrille[i].description,listeRestoGrille[i].prix,listeRestoGrille[i].distance,listeRestoGrille[i].lien_page);
}


// fonction filtre associé bouton

// bouton traditionnel
let filtreTraditionnel=  listeRestoGrille.filter(element => element.type_nouriture ==="Traditionnel");
const traditionel = document.querySelector(".buton.Rond.traditionel")
traditionel.addEventListener("click",()=>{
  grilleGénéral.innerHTML = ""
  for( let i = 0; i < listeRestoGrille.length; i++){
    creerResto(filtreTraditionnel[i].nom, filtreTraditionnel[i].image, filtreTraditionnel[i].description,filtreTraditionnel[i].prix,filtreTraditionnel[i].distance,filtreTraditionnel[i].lien_page);
  }
});

// bouton boulangerie
let filtreBoulangerie=  listeRestoGrille.filter(element => element.type_nouriture ==="Boulangerie");
const boulangerie = document.querySelector(".buton.Rond.boulangerie");
boulangerie.addEventListener("click",()=>{
  grilleGénéral.innerHTML = ""
  for( let i = 0; i < listeRestoGrille.length; i++){
    creerResto(filtreBoulangerie[i].nom, filtreBoulangerie[i].image, filtreBoulangerie[i].description,filtreBoulangerie[i].prix,filtreBoulangerie[i].distance,filtreBoulangerie[i].lien_page);
  }
});

// bouton asiatique
let filtreAsiatique=  listeRestoGrille.filter(element => element.type_nouriture ==="Asiatique");
const asiatique = document.querySelector(".buton.Demirond.asiatique");
asiatique.addEventListener("click",()=>{
  grilleGénéral.innerHTML = ""
  for( let i = 0; i < listeRestoGrille.length; i++){
    creerResto(filtreAsiatique[i].nom, filtreAsiatique[i].image, filtreAsiatique[i].description,filtreAsiatique[i].prix,filtreAsiatique[i].distance,filtreAsiatique[i].lien_page);
  }
});

// bouton burger
let filtreBurger=  listeRestoGrille.filter(element => element.type_nouriture ==="Burger");
const burger = document.querySelector(".buton.Rond.burger");
burger.addEventListener("click",()=>{
  grilleGénéral.innerHTML = ""
  for( let i = 0; i < listeRestoGrille.length; i++){
    creerResto(filtreBurger[i].nom, filtreBurger[i].image, filtreBurger[i].description,filtreBurger[i].prix,filtreBurger[i].distance,filtreBurger[i].lien_page);
  }
});

// bouton snack
let filtreSnack=  listeRestoGrille.filter(element => element.type_nouriture ==="Snack");
const snack = document.querySelector(".buton.Demirond.snack");
snack.addEventListener("click",()=>{
  grilleGénéral.innerHTML = ""
  for( let i = 0; i < listeRestoGrille.length; i++){
    creerResto(filtreSnack[i].nom, filtreSnack[i].image, filtreSnack[i].description,filtreSnack[i].prix,filtreSnack[i].distance,filtreSnack[i].lien_page);
  }
});


// Nav barre JO
let Barre_nav = document.querySelector(".Barre_nav");
let lastScrollValue = 0;

document.addEventListener('scroll',() => {
  let top = document.documentElement.scrollTop;
  if (lastScrollValue < top) {
    Barre_nav.classList.add("hidden");
  } else {
    Barre_nav.classList.remove("hidden")
  }
  lastScrollValue = top;
})


// Code Audrey barre filtre
const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', () => {
    item.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  });
});


//---------------------------------------

/* // quand pn clique sur listeRestoGrille[i] on ouvre page-resto avec données listeRestoGrille[i]

const listeResto=document.querySelector(".grilleResto")

listeRestoGrille.addEventListener('click',()=>{
  function openNewPage() {
    window.open("Desktop\projet groupe\Projet-1-The-Wild-Eats\indexresto1.html");
}})
*/

