alert("Lancia il dado e prova a battere il PC!");

var firstRandomNum = Math.floor(Math.random() * 6) + 1;

var secondRandomNum = Math.floor(Math.random() * 6) + 1;

document.getElementById("player-dice").innerHTML = firstRandomNum;
document.getElementById("pc-dice").innerHTML = secondRandomNum;

if (firstRandomNum > secondRandomNum) {
  alert("Hai vinto!");
} else if (firstRandomNum < secondRandomNum) {
  alert("Hai perso!");
} else {
  alert("E' un pareggio!");
}
