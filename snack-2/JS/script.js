/* Stampa il cubo di ciascuno dei primi N numeri,
 dove N è un numero indicato dall’utente.
  (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…) */

// Hook HTML

const hookHtml = document.getElementById("hook");

// Dichiaro le variabili

let numUser = prompt("Inserisci un numero");

let cube;

// Check se è un numero

if (isNaN(numUser)) {
  alert("Inserisci un numero!");
} else {
  // Risposta su HTML
  hookHtml.innerHTML += `Bene hai inserito: ${numUser}, ti darò il cubo di ${numUser} numeri! `;
  // Ciclo for ripetuto "numUser" volte
  for (let i = 1; i <= numUser; i++) {
    // cube è il cubo di i
    cube = Math.pow(i, 3);
    console.log(cube);
    //stampo in HTML cube
    hookHtml.innerHTML += `<br/>${cube}`;
  }
}
