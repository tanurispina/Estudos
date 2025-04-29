// Crie um programa em JavaScript que:
// Solicite ao usuário um número inteiro.
// Verifique se o número é par ou ímpar.
// Exiba uma mensagem dizendo se o número é par ou ímpar.

const prompt = require('prompt-sync')();

let verificarNumero = Number(prompt('Informe um número: '));

if (verificarNumero % 2 == 0) {
    console.log(`O número digitado foi: ${verificarNumero} e ele é um NÚMERO PAR.`);
} else {
    console.log(`O número digitado foi: ${verificarNumero} e ele é um NÚMERO ÍMPAR.`);
}