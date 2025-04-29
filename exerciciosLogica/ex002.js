// Crie um programa em JavaScript que:
// Solicite ao usuário dois números.
// Compare os dois números.

// Exiba:
// O maior número.
// O menor número.
// Se os números são iguais ou diferentes.

const prompt = require('prompt-sync')();

let numero1 = Number(prompt(' Informe o Primeiro numero: '));
let numero2 = Number(prompt(' Informe o Segundo numero: '));


console.log(`O numero 1 é ${numero1}, o numero 2 é: ${numero2}`);
if (numero1 > numero2)
    {
        console.log(' O numero 1 é o MAIOR numero, O numero 2 é O MENOR numero e eles sao numeros diferentes');
    }
else if (numero1 < numero2)
    {
        console.log(' O numero 2 é o MAIOR numero, O numero 1 é o MENOR numero e eles sao numeros diferentes');
    }
else 
    {
         console.log('Os numeros sao iguais')
    }
