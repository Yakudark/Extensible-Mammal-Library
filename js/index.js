// ----------------Follow cursor----------------------
document.onmousemove = suitsouris;

function suitsouris(evenement) {
  if (navigator.appName == "Microsoft Internet Explorer") {
    var x = event.x + document.body.scrollLeft;
    var y = event.y + document.body.scrollTop;
  } else {
    var x = evenement.pageX;
    var y = evenement.pageY;
  }
  document.getElementById("image_suit_souris").style.left = (x + 1) + 'px';
  document.getElementById("image_suit_souris").style.top = (y + 1) + 'px';
}

//   END follow cursor-----------------------
// stop animation menu-toggler
document.getElementById("menu-toggler").checked = false;
// stop animation menu-toggler

// Modal Statistiques----------------------------
const myModal = document.getElementById('modal_statistique')
const myInput = document.getElementById('stats')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})