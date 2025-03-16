// Atividade 2 - Matriz transposta

//Imprimir uma matriz transposta de uma matriz inicial

//Matriz transposta = o número de linhas vira o número de colunas
    function transporMatriz(A) {
        console.log(" - Matriz: ");
        // O for-each percorre cada linha da matriz e separa os números com um espaço
        A.forEach(row => console.log(row.join(" ")));
        
        let linhas = A.length; //pega o número de arrays da linha
        let colunas = A[0].length; //pega o número de arrays da coluna
        let transposta = Array.from({ length: colunas }, () => Array(linhas).fill(0)); //cria uma matrzi transposta vazia
        
        //o for dentro do for percorre a matriz e preenche trocando as linhas pelas colunas
        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                transposta[j][i] = A[i][j];
            }
        }
        
        //imprimindo a transposta
        console.log("\n - Matriz transposta: ");
        transposta.forEach(row => console.log(row.join(" ")));
    }
    
    //Testando usando o exemplo que foi dado na atividade
    const matriz = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];
    
    transporMatriz(matriz);
    
