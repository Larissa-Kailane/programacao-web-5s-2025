// Atividade 2 - Verificar se os números são primos

//Para um número ser primo, ele só pode ser divisivel por 1 e ele mesmo


// Função para verificar se um número é primo
function verificarNumeroPrimo(n) {
    // PRIMEIRA CONDIÇÃO: 1 e 0 não são primos
    if (n < 2) return false; 
    // SEGUNDA CONDIÇÃO: 2 é o único número par que é primo
    if (n == 2) return true; 
     // TERCEIRA CONDIÇÃO: números pares não são números primos
    if (n % 2 == 0) return false;

    /* UTILIZANDO O FOR
    - Loop responsável por verificar se n é divisivel por algum número ímpar, começando no 3
    - Ele verifica os valores até a raís quadradada do número [i <= Math.sqrt(n)] - Ele encontra a raíz de n;
      -> Por exemplo, 49 - sua raíz quadrada é 7 - se ele fosse um número primo, não teria divisores de 3 até 7
      -> Números primos não possuem raíz exata
    - [i += 2] - pulando os números pares 
    */
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }

    return true; 
}

// Testando os números que foram pedisos
console.log(verificarNumeroPrimo(0));// false
console.log(verificarNumeroPrimo(1));// false
console.log(verificarNumeroPrimo(2));// true
console.log(verificarNumeroPrimo(3));// true
console.log(verificarNumeroPrimo(7));// true
console.log(verificarNumeroPrimo(83));// true
console.log(verificarNumeroPrimo(100));// false
console.log(verificarNumeroPrimo(991)); // true
console.log(verificarNumeroPrimo(104729));// true
console.log(verificarNumeroPrimo(14348907));// false
