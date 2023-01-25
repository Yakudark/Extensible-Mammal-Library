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