//Escreva um programa que conte de 1 a 100 e
//Se for múltiplo de 3 exiba "Batata"
//Se for múltiplo de 5 exiba "Quente"
//Se for multiplo de 3 e 5 exiba "Batata Quente"
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Batata Quente");
    } else if (i % 3 === 0) {
        console.log("Batata");
    } else if (i % 5 === 0) {
        console.log("Quente");
    } else {
        console.log(i);
    }   
