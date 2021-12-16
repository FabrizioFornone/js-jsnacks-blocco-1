/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
 Continua a chiedere i numeri all’utente e a inserirli nell’array
  fino a quando la somma degli elementi è minore di 50. */

// Hook HTML

const hookHtml = document.getElementById("hook");

// Dichiarazione variabile contenente array vuoto

let emptyArray = [];

// Dichiarazione numberRequest e sum

let sum = 0;

// Ciclo do-while

do {
  // numberRequest è un prompt
  let numberRequest = prompt("Inserisci un un numero");
  // emptyArray viene riempita da numberRequest
  emptyArray.push(numberRequest);
  /* sum è una variabile che somma sempre i valori inseriti
   con numberRequest, convertendoli in numeri */
  sum += parseInt(numberRequest);
  console.log(numberRequest);
  console.log(sum);

  // if di check
  if (sum >= 50) {
    alert("Ahia, hai superato 50!");
  } else {
    console.log("l'utente non ha ancora superato 50");
  }
} while (sum < 50);
