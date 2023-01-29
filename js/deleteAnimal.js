function deleteCard(){
    const animalName = document.querySelector('.profile-name').innerText
   // Envoyer la requête au script PHP 
      // qui nous permettra de sauvegarder les données
      const xhrPost = new XMLHttpRequest();
      xhrPost.open("POST", "http://127.0.0.1:8000/deleteAnimal.php", true);
      xhrPost.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhrPost.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhrPost.setRequestHeader("Access-Control-Allow-Methods", "*");

      
      xhrPost.onreadystatechange = function() {
          if (xhrPost.readyState === 4 && xhrPost.status === 200) {
              console.log(xhrPost.responseText);
        
          }
      };
     xhrPost.send(`data=${animalName}`);

}

       