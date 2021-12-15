/*  Stampa le potenze di 2 fino a 1000.*/

// Hook HTML

const hookHtml = document.getElementById("hook");

// dichiarazione variabili

let highNumber;

let x = 0

// Ciclo do-while

do {
  highNumber = Math.pow(2, x);
  x++;
  hookHtml.innerHTML += `<br/>${highNumber}`;
} while (highNumber <= 1000)



