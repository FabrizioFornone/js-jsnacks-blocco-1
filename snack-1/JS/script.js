/*Il software deve chiedere per 10 volte all’utente
 di inserire un numero. Il programma stampa la somma di tutti
  i numeri inseriti */

// Hook HTML

const hookHtml = document.getElementById("hook");

// Dichiarazione variabili

let numRequest;

let sum = 0;

// Ciclo for

for (let i = 0; i < 10; i++) {
  // prompt x utente
  numRequest = prompt("Inserisci un numero");
  // Check se l'imput inserito è un numero o no
  if (isNaN(numRequest)) {
    alert("Inserisci un numero!");
  } else {
    // trasforma stringa in intero
    numRequest = parseInt(numRequest);
    /* conserva il valore inserito in una variabile sum
     che non si sovrascrive alla fine del ciclo */
    sum += numRequest;
    console.log(sum);
  }
}

// Stampo in HTML

hookHtml.innerHTML = `La somma dei numeri inseriti è: <strong> ${sum} </strong>`;
