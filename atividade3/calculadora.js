//Funções de calculo
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