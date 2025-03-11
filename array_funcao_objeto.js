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

//Matriz
//vetor de vetores
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//o índice é o número da linha e da coluna

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }
}
imprimirMatriz(matriz);

let capitatis = {
    DF: "Brasília",
    DDD: 61,
    SP: "São Paulo",
    DDD: 11,
    RJ: "Rio de Janeiro",
    DDD: 21
}

for(chave in capitais){
    console.log(chave + "=" + capitais[chave]);
}

function verificarParidade(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

console.log(`Verificar paridade(${n}=${verificarParidade(n)})`);
n = 3;