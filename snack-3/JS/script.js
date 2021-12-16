/*  Stampa le potenze di 2 fino a 1000.*/

// Hook HTML

const hookHtml = document.getElementById("hook");

// dichiarazione variabili

let highNumber = 2;

let x = 2;

// Ciclo While

while (Math.pow(2, x) < 1000) {
  highNumber = Math.pow(2, x);
  hookHtml.innerHTML += `<br/>${highNumber}`;
  x++;
}
