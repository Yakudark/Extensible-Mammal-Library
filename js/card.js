// Création et configuration d'un objet XML
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "./index.xml", true);
xhttp.send();

 // Code à exécuter une fois le fichier XML est chargé*
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Récupération de la réponse contenant les données XML
    const xml = this.responseXML;

   // Manipulation du DOM pour récupérer aux données XML
    // et les afficher dans les cards
    const mamals = xml.children[0]
    const species = mamals.children

    for (i = 0; i < species.length; i++) {
      document.querySelector('main').innerHTML += "<br>"

        const animalName = species[i].children[0].textContent
        const imgUrl = species[i].children[1].textContent
        
        const containerCard = document.querySelector('.animal-list')
        containerCard.innerHTML += `<div class="card">
        <img
          src= ${imgUrl}
          class="card-img-panda"
        />
        <div class="card-body">
          <p class="card-text d-flex justify-content-center">${animalName}</p>
        </div>
      </div>`

      // Au clique, affichage des données de l'animal cliqués dans la sidebar
        const cards = document.querySelectorAll('.card')
        cards.forEach(card => {
            card.onclick = () => {
              const nameOnCard = card.children[1].children[0].textContent
              
              for (let j = 0; j < species.length; j++) {
                const storedName = species[j].children[0].textContent

              if(storedName == nameOnCard){
                
                const img = species[j].querySelector('img').textContent
                const description = species[j].querySelector('description').textContent
                const height = species[j].querySelector('height').textContent
                const weight = species[j].querySelector('weight').textContent
                const speed = species[j].querySelector('speed').textContent
                const lifeSpan = species[j].querySelector('lifeSpan').textContent
                const gestationPeriod = species[j].querySelector('gestationPeriod').textContent
                const dailySleep = species[j].querySelector('dailySleep').textContent
                const location = species[j].querySelector('location').textContent
                const famousAnimal = species[j].querySelector('famousAnimal').textContent


                const containerSideBar = document.querySelector('.sidebar-section')
                containerSideBar.innerHTML = `<div class="main-card">
                <div class="profile-card text-center">
                <img src="${img}" class="img img-responsive">
                    <div class="profile-content">
                        <div class="profile-name">
                            <p>${storedName}</p>
                        </div>
                        <div class="profile-description">${description}</div>
        
                        <div class="container text-center">
                            <div class="row">
        
                                <div class="col profile-overview">
                                    <p class="characteristic">Height</p>
                                    <h4 class="height">${height}</h4>
                                </div>
        
                                <div class="col profile-overview">
                                    <p class="characteristic">Weight</p>
                                    <h4 class="weight">${weight}</h4>
                                </div>
                            </div>
        
                            <div class="row">
                                <div class="col profile-overview">
                                    <p class="characteristic">Speed</p>
                                    <h4 class="speed">${speed}</h4>
                                </div>
        
                                <div class="col profile-overview">
                                    <p class="characteristic">Life span</p>
                                    <h4 class="lifespan">${lifeSpan}</h4>
                                </div>
                            </div>
        
                            <div class="row">
                                <div class="col profile-overview">
                                  <p class="characteristic">Gestation period</p>
                                  <h4 class="gestation">${gestationPeriod}</h4>
                              </div>
                                <div class="col profile-overview">
                                    <p class="characteristic">daily sleep</p>
                                    <h4 class="sleep">${dailySleep}</h4>
                                </div>
                            </div>
                            <div class="row">
                              <div class="col profile-overview">
                                <p class="characteristic">Location</p>
                                <h4 class="location">${location}</h4>
                            </div>
                              <div class="col profile-overview">
                                  <p class="characteristic">Famous animal</p>
                                  <h4 class="famous">${famousAnimal}</h4>
                              </div>
                              
                              
                          </div>
        
                        </div>
                    </div>
                </div>
              
            </div>
            `
        
              }
            }
          }
      });
      
    }
  } 
};



