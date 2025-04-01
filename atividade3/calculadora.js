//Funções de calculo
/* 
    Esse módulo implementa as operações básicas de uma calculadora, que devem estar disponíveis para
    outras partes do código.
*/


function somar(a, b){
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

//tudo que eu quero que seja visivel em outras partes do código
module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}

/*

Outra forma é ultilizar a palavra export antes da função

export function dividir(a, b){
    return a / b;
}

*/



//CORREÇÃO DA AULA - NOTAS
/* Criar as funções
- Mesmo código do professor^^

export function somar(a, b){
    return a + b;
}

export function subtrair(a, b){
    return a - b;
}

export function multiplicar(a, b){
    return a * b;
}

export function dividir(a, b){
    return a / b;
}

*/
