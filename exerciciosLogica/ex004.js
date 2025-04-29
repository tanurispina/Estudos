// Crie um programa que:
// Peça ao usuário para informar duas notas.
// Calcule a média entre essas duas notas.

// Informe se o aluno está:
// Aprovado (média maior ou igual a 6),
// Em recuperação (média entre 4 e 5.9),
// Reprovado (média menor que 4).

const prompt = require('prompt-sync')();

let alunoNota1 = Number(prompt(' Informe a primeira nota: '));
let alunoNota2 = Number(prompt(' Informe a segunda nota: '));
let mediaNotas = (alunoNota1+alunoNota2)/2;

console.log(`As notas informadas foram: ${alunoNota1} e ${alunoNota2}`)
if (mediaNotas>=6)
    {
        console.log( ` A media foi: ${mediaNotas} Situacao: APROVADO`)
    }
else if (mediaNotas >= 4 && mediaNotas<=5.9)
    {
        console.log( ` A media foi: ${mediaNotas} Situacao: EM RECUPERAÇÃO`)
    }
else 
    {
        console.log( ` A media foi: ${mediaNotas} Situacao: REPROVADO`) 
    }