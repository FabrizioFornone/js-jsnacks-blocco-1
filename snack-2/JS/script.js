/* Stampa il cubo di ciascuno dei primi N numeri,
 dove N è un numero indicato dall’utente.
  (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…) */

// Hook HTML

const hookHtml = document.getElementById("hook");

numbers = ["1","2","3","4","5"]

let numuser = parseInt(prompt("Inserisci un numero"));

let cube = 0;

for (let i = 0; i < numuser; i++) {
  cube = Math.pow(i, 3);
  console.log(cube);
  //stampo in HTML
  hookHtml.innerHTML += cube;
}
