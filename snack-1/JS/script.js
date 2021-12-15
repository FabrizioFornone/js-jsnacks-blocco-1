/*Il software deve chiedere per 10 volte all’utente
 di inserire un numero. Il programma stampa la somma di tutti
  i numeri inseriti */

// Hook HTML

const hookHtml = document.getElementById("hook");

// Ciclo for x generare 10 prompt

let numRequest = 0;

let sum = 0;

for (let i = 0; i < 10; i++) {
  numRequest = parseInt(prompt("Inserisci un numero"));
  console.log(numRequest);
  sum += numRequest;
  console.log(sum);
}

// Stampo in HTML

hookHtml.innerHTML = `La somma dei numeri inseriti è: <strong> ${sum} </strong>`;
