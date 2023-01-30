const editModal = document.querySelector('.editModal')
editModal.style.cssText = "display:none !important"


editModal.innerHTML += `
<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content w-100">
    <div class="modal-header">
      <h1 class="modal-title fs-5 " id="exampleModalLabel">Edit Animal</h1>
      <button type="button" class="btn-close me-3"></button>
    </div>
    <div class="modal-body flex-col d-flex justify-content-center">
    </div>
  </div>
</div>`

   
    
    
const btnClose = document.querySelector('.editModal .btn-close')
const editModalBody = document.querySelector('.editModal .modal-body')


function editCard(){  
  editModal.style.cssText = "display:initial !important"
  // Création et configuration d'un objet XML
const xhr = new XMLHttpRequest();
xhr.open("GET", "./index.xml", true);
xhr.send();

 // Code à exécuter une fois le fichier XML est chargé*
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Récupération de la réponse contenant les données XML
    const xml = this.responseXML;

    const species = xml.getElementsByTagName('species');
    const nameOnCard = document.querySelector('.btnModification').parentNode.parentNode.parentNode.querySelector('.profile-name p').textContent
    for(let i = 0; i<species.length; i++){
      const animalName = species[i].children[0].textContent

      if(animalName == nameOnCard){
        const imgUrl = species[i].children[1].textContent
        const description =species[i].children[2].textContent
        const height = species[i].children[3].textContent
        const weight = species[i].children[4].textContent
        const speed = species[i].children[5].textContent
        const lifeSpan = species[i].children[6].textContent
        const gestationPeriod = species[i].children[7].textContent
        const dailySleep = species[i].children[8].textContent
        const location = species[i].children[9].textContent.split(' ')
        const famousAnimal = species[i].children[10].textContent

        editModalBody.innerHTML = `<form class="flex-col col-11"><div class="row gap-md-5">
    <div class="col">
      <label class="form-label">Image url</label>
      <input type="text" class="form-control" id="url" value=${imgUrl} required/>
   </div>
    <div class="col">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" id="name" value=${animalName} readonly required/>
  </div>
  </div>
  <div class="row gap-md-5">
    <div class="col">
    <label class="form-label">Average weight (kg)</label>
    <input type="number" class="form-control" id="height" min="0" value=${height} required/>
    </div>
     <div class="col">
    <label class="form-label">Average height (cm)</label>
    <input type="number" class="form-control" id="weight" min="0" value=${weight} required/>
     </div>
  </div>
  <div class="row gap-md-5">
     <div class="col">
    <label class="form-label">Speed (km/h)</label>
    <input type="number" class="form-control" id="speed" min="0" value=${speed} required/>
      </div>
      <div class="col">
    <label class="form-label">Life span (days)</label>
    <input type="number" class="form-control" id="lifeSpan" min="0" value=${lifeSpan} required/>
     </div>
  </div>
  <div class="row gap-md-5">
    <div class="col">
    <label class="form-label">Gestation (days)</label>
    <input type="number" class="form-control" id="gestation" min="0" value=${gestationPeriod} required/>
     </div>
      <div class="col">
      <label class="form-label">Daily sleep (hours)</label>
      <input type="number" class="form-control" id="dailySleep" min="0" value=${dailySleep} required/>
       </div>
  </div>
  <div class="row gap-md-5">
    <div class="col d-flex flex-column">
      <label for="location" class="form-label">Location</label>
      <div class="checkbox">
        <div class="d-flex justify-content-between">
        <div class="d-flex flex-column align-items-center">
          <input name="location" type="checkbox" value="Africa"/>
          <label>Africa</label>
        </div>
        <div class="d-flex flex-column align-items-center">
          <input name="location" type="checkbox" value="America"/>
          <label>America</label>
        </div>
        <div class="d-flex flex-column align-items-center">
          <input name="location" type="checkbox" value="Europe"/>
          <label>Europe</label>
        </div>
      </div>
        <div class="d-flex justify-content-between">
        <div class="d-flex flex-column align-items-center">
          <input name="location" type="checkbox" value="Asia"/>
          <label>Asia</label>
        </div>
        <div class="d-flex flex-column align-items-center">
          <input name="location" type="checkbox" value="Oceania"/>
          <label>Oceania</label>
        </div>
        <div class="d-flex flex-column align-items-center">
          <input name="location" type="checkbox" value="Antarctica"/>
          <label>Antarctica</label>
        </div>
        </div>
      </div>
    </div>
      <div class="col">
        <label class="form-label">Famous animal</label>
        <input type="text" class="form-control" id="name" value=${famousAnimal} required/>
      </div>
    </div>
  <div class="row gap-md-5">
    <div class="col">
    <label class="form-label">Description</label>
    <textarea type="text" class="form-control" id="description" required>${description}</textarea>
     </div>
     </div>   
     <div>       
     <input type="submit" class="btn" id="edit-animal" value="Edit"/>
    </div>
    </form>`
    const checkboxTab = document.querySelectorAll('.editModal input[name="location"]')

    for(let i = 0;i<location.length;i++){
 
      for(let x = 0;x<checkboxTab.length; x++){
        if(checkboxTab[x].value == location[i]){
          checkboxTab[x].setAttribute('checked', '')
           }
          }
        }
        const editForm = document.querySelector('.editModal form')
console.log(editForm)
editForm.onsubmit = (e) => {
  e.preventDefault()

  // Récupération des données du formulaire 
  const animalName = editForm[1].value

  const img = editForm[0].value

  const description = editForm[15].value

  const height = editForm[3].value

  const weight = editForm[2].value

  const speed = editForm[4].value

  const lifeSpan = editForm[5].value

  const gestationPeriod = editForm[6].value

  const dailySleep = editForm[7].value
  const famousAnimal = editForm[14].value

  let location = ""
  const locationTab = editForm.querySelectorAll('input[name="location"]')
  locationTab.forEach(el => {
    if(el.checked == true){
      location += `${el.value} `
    }
  });
    
      // Création un objet contenant les données du formulaire 
  const objectData = {name : animalName,
    img : img,
    description : description,
    height : height,
    weight : weight,
    speed : speed,
    lifeSpan: lifeSpan,
    gestationPeriod : gestationPeriod,
    dailySleep : dailySleep,
    location : location,
    famousAnimal : famousAnimal
  }

    // Envoyer la requête au script PHP 
    // qui nous permettra de sauvegarder les données
      const xhrPost = new XMLHttpRequest();
      xhrPost.open("POST", "http://127.0.0.1:8000/editAnimal.php", true);
      xhrPost.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhrPost.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhrPost.setRequestHeader("Access-Control-Allow-Methods", "*");

      
      xhrPost.onreadystatechange = function() {
          if (xhrPost.readyState === 4 && xhrPost.status === 200) {
              console.log(xhrPost.responseText);
        
          }
      };
      console.log(objectData)
      xhrPost.send(`data= ${JSON.stringify(objectData)}`);
}
      }
    }
  }
 
}
} 

btnClose.onclick = () => {
    editModal.style.cssText = "display: none ! important"
}    




  