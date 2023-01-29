var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        parseXML(this);
    }
};
xhttp.open("GET", "index.xml", true);
xhttp.send();

function parseXML(xml) {
    var xmlDoc = xml.responseXML;
    var species = xmlDoc.getElementsByTagName("species");
    var animals = [];
    var speeds = [];
    var heights = [];
    for (var i = 0; i < species.length; i++) {
        animals.push(species[i].getElementsByTagName("name")[0].innerHTML);
        speeds.push(species[i].getElementsByTagName("speed")[0].innerHTML);
        heights.push(species[i].getElementsByTagName("height")[0].innerHTML);
    }

    var ctx = document.getElementById("chart").getContext("2d");
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: animals,
            datasets: [{
                label: 'Speed (km/h)',
                data: speeds,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            },
            {
                label:'height (cm)',
                data: heights,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
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