const form = document.querySelector('.modal form')
  form.onsubmit = (e) => {
    e.preventDefault()

    // Récupération des données du formulaire 
    const animalName = form[1].value

    const img = form[0].value

    const description = form[2].value

    const height = form[3].value

    const weight = form[4].value

    const speed = form[5].value

    const lifeSpan = form[6].value

    const gestationPeriod = form[7].value

    let location = ''
    const locationTab = form.querySelectorAll('input[name="location"]')
    locationTab.forEach(el => {
      if(el.checked === true){
        location += `<area>${el.value}</area`
      }
    });

    const famousAnimal = form[14].value

    const dailySleep = form[15].value


    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./index.xml", true);
    xhttp.send();
    
     
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let blob = new Blob([xhttp.toString()], {type: "text/xml"});
        let file = new File([blob], "./../index.xml", {type: "text/xml"});
       
        let url = URL.createObjectURL(blob);
        
        const xml = this.responseXML;
        const root = xml.querySelectorAll('root')
        console.log(root)
        
        root.innerHTML += `<species>
        <name>${animalName}</name>
        <img>${img}</img> 
        <description>${description}</description>
        <height unit="cm">${height}</height> 
        <weight unit="cm">${weight}</weight>
        <speed unit="km/h">${speed}</speed>
        <lifeSpan unit="years">${lifeSpan}</lifeSpan>
        <gestationPeriod unit="days">${gestationPeriod}</gestationPeriod>
        <dailySleep unit="h">${dailySleep}</dailySleep>
        <location>${location}</location>
        <famousAnimal>${famousAnimal}</famousAnimal>
        </species>`;            
          }
      }



}

