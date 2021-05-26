var nome = prompt("inserisci nome");
console.log(nome);

var cognome = prompt("inserisci cognome");
console.log(cognome);

var colore = prompt("inserisci colore preferito");
console.log(colore);

var password = nome + cognome + colore + "21";

document.getElementById('password').innerHTML += password.toLowerCase();
console.log(password);