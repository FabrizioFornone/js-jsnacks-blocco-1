/* Chiedi un numero di 4 cifre all’utente e calcola
 la somma di tutte le cifre che compongono il numero. */

// Hook HTML

const hookHtml = document.getElementById("hook");

// prompt di richiesta

let numRequest = prompt(
  "Per favore, digita un numero di 4 cifre, farò la somma di queste per te"
);

// dichiarazione di sum

let sum = 0;

// Check se è un numero

if (isNaN(numRequest)) {
  alert("Non hai inserito un numero, ricarica la pagina");
}
// Check se è un numero a 4 cifre esatte
else if (numRequest.length !== 4) {
  alert("Inserisci esattamente 4 cifre! Ricarica la pagina");
}
// Esegui se l'informazione inserita è valida
else {
  // Ciclo for che dura quanti sono i caratteri della stringa inserita
  for (i = 0; i < numRequest.length; i++) {
    /* sum è una variabile che somma sempre i valori inseriti
   con numberRequest, convertendoli in numeri */
    sum += parseInt(numRequest[i]);
  }
  //Stampa sum in HTML
  hookHtml.innerHTML = `Ecco a te la somma <strong> ${sum} </strong> `;
}
