// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

function genNumber(n) {
 return Math.floor(Math.random() * (n - 1) + 1);
}

function isEven(n) {
 if (n % 2 == 0) {
  return true;
 }
 return false;
}

let scelta = prompt("Scegli pari o dispari");
if (scelta == "pari" || scelta == "dispari") {
 let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
 console.log(userNumber);

 let pcNumber = parseInt(genNumber(5));
 console.log(pcNumber);
 let somma = userNumber + pcNumber;

 if (scelta == "pari") {
  if (isEven(somma)) {
   console.log("la somma " + somma + " è pari, vince l'user");
  } else {
   console.log("la somma " + somma + " è pari, vince il pc");
  }
 } else {
  if (isEven(somma)) {
   console.log("la somma " + somma + " è pari, vince l'user");
  } else {
   console.log("la somma " + somma + " è pari, vince il pc");
  }
 }
} else {
 console.log("la parola inserita non è valida");
}
