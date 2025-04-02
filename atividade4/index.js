const express = require('express');
const app = express();

//armazenamento do estoque - como um galpão onde os produtos vão sendo armazenados 
let estoque = {};


app.get('/', (req, res) => { // req - objeto de requisição; res - objeto de resposta
    //criando um html simples para apresentação da página
    let html = '<h1>API estoque</h1>';
    html += '<h3>Rotas disponíveis</h3>';
    html += '<p>/adicionar/:id/:nome/:qtd  <a href= "/adicionar/:id/:nome/:qtd">Testar - adicionar</a></p>';
    html += '<p>/listar <a href= "/listar">Testar - listar</a></p>';
    html += '<p>/remover/:id  <a href= "/remover/:id">Testar - remover</a></p>';
    html += '<p>/editar/:id/:qtd  <a href= "/editar/:id/:qtd">Testar - editar</a></p>';
    res.send(html);
});

// Adicionar
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const quantidade = parseInt(qtd);

    let html = '<h3>Adicionando Produtos</h3>';

    if (isNaN(quantidade)) {
        html += '<p style="color:red;">Erro: A quantidade deve ser um número válido.</p>';
    } else {
        estoque[id] = { nome, quantidade };
        html += `<p>Produto: <strong>${nome}</strong> adicionado com sucesso!</p>`; //strong - deixa fonte em negrito para dar mais destaque
    }

    res.send(html);
});


// Listar
app.get('/listar', (req, res) => {
    let html = '<h3>Lista de Produtos</h3>';
    for (let id in estoque) { //percorrendo o estoque para listar
        html += `<li>${estoque[id].nome} - ${estoque[id].quantidade}</li>`; //<li> - para listas em html
    }
    res.send(html);
});

// Remover
app.get('/remover/:id', (req, res) => {
    let html = '<h3>Removendo Produtos</h3>';

    if (estoque[req.params.id]) {
        delete estoque[req.params.id];
        html += '<p>Produto removido com sucesso!</p>';
    } else {
        html += '<p style="color:red;">!!!ESTE PRODUTO NÃO EXISTE!!!</p>'; //style="color:red - para mudar a cor da mensagem de erro
    }

    res.send(html); 
});


// Editar - edita a quantidade
app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const quantidade = parseInt(qtd);

    let html = '<h3>Editando a quantidade de Produtos</h3>';

    if (!estoque[id]) {
        html += '<p style="color:red;">!!!ESTE PRODUTO NÃO EXISTE!!!</p>';
    } else if (isNaN(quantidade)) {
        html += '<p style="color:red;"> !!!A quantidade deve ser um número válido!!!</p>';
    } else {
        estoque[id].quantidade = quantidade;
        html += `<p>A quantidade de <strong>${estoque[id].nome}</strong> foi atualizada para <strong>${quantidade}</strong> com sucesso!</p>`;
    }

    res.send(html);
});


//DECLARANDO UMA PORTA
//localhost - nossa própria máquina
const PORT = 8080;
app.listen(PORT, ()=>{ //função anônima
    console.log('app rodando na porta ' + PORT);
});
