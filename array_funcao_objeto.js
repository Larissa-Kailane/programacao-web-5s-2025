let num_A = 2;
let num_B = 3.0;
let num_C;

/*
//declarando array
const operacoes = [1, true, 3, "1"];
operacoes[2]; //para acessar um valor, coloca o nome e coloca o índice do valor, no caso o 2 para o n° 3
*/

const operacoes = ["adição", "subtração", "multiplicação", "divisão"];

function imprimirResultado(operando1, operando2, operacao, resultado){
    console.log(`Resultado da ${operacao} entre ${operando1} e ${operando2} é igual a ${resultado}`);
}

num_C = num_A + num_B;
imprimirResultado(num_A, num_B, operacoes[0], num_C);

num_C = num_A - num_B;
imprimirResultado(num_A, num_B, operacoes[1], num_C);

num_C = num_A * num_B;
imprimirResultado(num_A, num_B, operacoes[2], num_C);

num_C = num_A / num_B;
imprimirResultado(num_A, num_B, operacoes[3], num_C);

/*
num_C = num_A + num_B;
console.log(`Resultado da soma entre ${num_A} e ${num_B} é ${num_C}`);
*/