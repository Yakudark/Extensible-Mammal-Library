// // Créer un nouvel objet XMLHttpRequest
// var xhttp = new XMLHttpRequest();

// // Configurer l'objet pour charger le fichier XML
// xhttp.open("GET", "./index.xml", true);
// xhttp.send();

// // Fonction à exécuter lorsque le fichier XML est chargé
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     // Récupérer le contenu XML
//     const xml = this.responseXML;

//     // Utiliser les méthodes de l'objet DOM pour accéder aux données XML
//     const mamals = xml.children[0]
//     console.log(mamals)
//     const species = mamals.children
//     console.log(species)
//     for (i = 0; i < species.length; i++) {
//       document.querySelector('main').innerHTML += "<br>"
//       for (j = 0; j < species[i].children.length; j++) {
//         console.log(species[i].children[j].localName)
//           document.querySelector('main').innerHTML +=  `<li>${species[i].children[j].localName} : ${species[i].children[j].innerHTML}</li>`
//       }
       
//     }
//   }
// };