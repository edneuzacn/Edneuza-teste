//calcular o fatorial de um numero(ex)  5! = 5*4*3*2*=120
let numero = 5;
let fatorial = 1;
for (let i = numero; i >= 1; i--) {
    fatorial *= i; //fatorial = fatorial * i
}       

console.log(`O fatorial de ${numero} é ${fatorial}`);
}      

