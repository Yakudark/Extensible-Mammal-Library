
const form = document.querySelector('.modal form')
  form.onsubmit = (e) => {
    e.preventDefault()

    // Récupération des données du formulaire 
    const animalName = form[1].value

    const img = form[0].value

    const description = form[15].value

    const height = form[3].value

    const weight = form[2].value

    const speed = form[4].value

    const lifeSpan = form[5].value

    const gestationPeriod = form[6].value

    const dailySleep = form[7].value
    const famousAnimal = form[14].value

    const location = []
    const locationTab = form.querySelectorAll('input[name="location"]')
    locationTab.forEach(el => {
      if(el.checked == true){
        location.push(el.value) 
      }
    });

 console.log(location)

    

// Récupération du fichier XML
    const xhrGet = new XMLHttpRequest();
    xhrGet.open("GET", "./index.xml", true);
    xhrGet.send();
    
     
    xhrGet.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        const xml = this.responseXML;
        const root = xml.querySelector('root')
     // Ajout du nouvel animal dans la racine fichier
        const objectData = {name : animalName,
        img : img,
        description : description,
        height : height,
        weight : weight,
        speed : speed,
        lifeSpan: lifeSpan,
        gestationPeriod : gestationPeriod,
        dailySleep : dailySleep,
        location : {area : location },
        famousAnimal : famousAnimal
      }


        console.log()

      // Envoyer la requête au script PHP 
      // qui nous permettra de sauvegarder les données
        const xhrPost = new XMLHttpRequest();
        xhrPost.open("POST", "http://127.0.0.1:8000", true);
        xhrPost.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhrPost.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhrPost.setRequestHeader("Sec-Fetch-Mode", "no-cors");
        xhrPost.setRequestHeader("Sec-Fetch-Site", "cross-site");
        xhrPost.onreadystatechange = function() {
            if (xhrPost.readyState === 4 && xhrPost.status === 200) {
                console.log(xhrPost.responseText);
          
            }
        };
        xhrPost.send(`data= ${JSON.stringify(objectData)}`);
      }
     }
  }
