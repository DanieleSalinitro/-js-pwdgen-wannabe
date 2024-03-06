let userName = prompt("Come ti chiami?");
let userSurname = prompt("Qual è il tuo cognome?");
let userColor = prompt("Qual è il uto colore preferito?");

document.getElementById('password').innerHTML = `<strong> ${userName}${userSurname}${userColor} !</strong>`