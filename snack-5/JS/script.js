/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
 Continua a chiedere i numeri all’utente e a inserirli nell’array
  fino a quando la somma degli elementi è minore di 50. */

// Hook HTML

const hookHtml = document.getElementById("hook");

let emptyArray = [];

let sum = 0;

i = 0;

do {
  let numberRequest = parseInt(prompt("Inserisci un un numero"));
  emptyArray.push(numberRequest);
  sum += emptyArray[i];
  i++;
  console.log(emptyArray);
  console.log(sum);
  if (sum >= 50) {
    console.log("non dovevi superare 50");
  } else {
    console.log("bene non hai superato 50");
  }
} while (sum < 50);
