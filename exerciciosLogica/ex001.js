// Exercicio 01 - Soma de dois números
// 1. Perguntar dois números para o usuário
// 2. Somar os dois número
// 3. Mostrar o resultado

const prompt= require('prompt-sync')();

let numero1= Number(prompt('Informe o primeiro Numero: '));
let numero2 = Number(prompt(' Informe o segundo numero: '));
let somaNumeros= (numero1+numero2);

console.log(`Os dois numeros informados, sao: ${numero1} e ${numero2}, A soma deles e: ${somaNumeros}`);