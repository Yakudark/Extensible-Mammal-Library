
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

    let location = ""
    const locationTab = form.querySelectorAll('input[name="location"]')
    locationTab.forEach(el => {
      if(el.checked == true){
        location += `${el.value} `
      }
    });

 console.log(location)

      
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
        xhrPost.open("POST", "http://127.0.0.1:8000/addAnimal.php", true);
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
