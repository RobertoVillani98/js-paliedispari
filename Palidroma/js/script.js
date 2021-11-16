// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

function isPalindroma(parola) {
 let newWorld = "";
 let palindroma = false;
 for (i = parola.length - 1; i >= 0; i--) {
  newWorld += parola[i];
 }
 if (newWorld == parola) {
  palindroma = true;
 }
 return palindroma;
}

let world = prompt("Inserisci una parola");
if (isPalindroma(world)) {
 console.log(world + " è palindroma");
} else {
 console.log(world + " non è palindroma");
}
