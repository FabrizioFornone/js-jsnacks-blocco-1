/* Chiedi un numero di 4 cifre all’utente e calcola
 la somma di tutte le cifre che compongono il numero. */

// Hook HTML

const hookHtml = document.getElementById("hook");

let numRequest = prompt(
  "Per favore, digita un numero di 4 cifre, farò la somma di queste per te"
);

let sum = 0;

for (i = 0; i < numRequest.length; i++) {
  sum += parseInt(numRequest[i]);
}

hookHtml.innerHTML = sum;
