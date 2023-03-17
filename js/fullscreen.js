var elem = document.getElementById("aquagame");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

var queryString2 = window.location.search;
var urlParams2 = new URLSearchParams(queryString);
var gamePage2 = urlParams.get('aqua');
 jso = fetch('/js/game.json');
  gms = jso.json();
  var dat = gms[gamePage]
function refreshGame() {
  document.getElementById('aquagame').src = dat.Iframe
}
function changeMethod(link) {
  document.getElementById("aquagame").src = link
}
