// "Password generator"
var yourName = prompt("What's your name?");
var yourSurname = prompt("And what about your surname?");
var favColor = prompt("And lastly: what is your favorite color?");

var password = yourName + yourSurname + favColor + 27 + " 😏";

document.getElementById("password").innerHTML = password;