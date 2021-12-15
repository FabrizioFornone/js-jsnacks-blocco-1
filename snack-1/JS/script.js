// Hook HTML

const hookHtml = document.getElementById('hook');

// Ciclo for x generare 10 prompt

let numRequest = 0;

for (let i = 0; i < 10; i++) {
  numRequest += parseInt(prompt("Inserisci un numero"));
}

console.log(numRequest);

// Stampo in HTML

hookHtml.innerHTML = numRequest;
