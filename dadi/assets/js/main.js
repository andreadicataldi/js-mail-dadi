alert("Lancia il dado e prova a battere il PC!")

// Genera un numero random da 1 a 6
var firstRandomNum = Math.floor(Math.random() * 6) + 1;
console.log(firstRandomNum);

var secondRandomNum = Math.floor(Math.random() * 6) + 1;
console.log(secondRandomNum);

document.getElementById("player-dice").innerHTML = firstRandomNum;
document.getElementById("pc-dice").innerHTML = secondRandomNum;

if (firstRandomNum > secondRandomNum) {
  alert("Hai vinto!");
} else if (firstRandomNum < secondRandomNum) {
  alert("Hai perso!");
} else {
  alert("E' un pareggio!")
}