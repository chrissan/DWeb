while(true)
{
var userChoice = prompt("Escoge piedra, papel o tijeras");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "piedra";
} else if(computerChoice <= 0.67) {
    computerChoice = "papel";
} else if(computerChoice <=1){
    computerChoice = "tijeras";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    alert("Empate");
}
if(choice1 === "piedra") {
    if(choice2 === "tijeras") {
        alert("Piedra gana tijeras");
    } else {
        alert("El papel le gana a piedra");
    }
}
if(choice1 === "papel") {
    if(choice2 === "piedra") {
        alert("Papel le gana a piedra");
    } else {
        if(choice2 === "tijeras") {
            alert("Tijera le gana a papel");
    }
}
}
if(choice1 === "tijeras") {
    if(choice2 === "piedra") {
        alert("Piedra le gana a papel");
    } else {
        if(choice2 === "papel") {
            alert("Tijera le gana a papel");
        }
    }
}
}
console.log(compare(userChoice, computerChoice));
}