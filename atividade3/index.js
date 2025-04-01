const calc = require('./calculadora'); //acesso as funções que o módulo disponibiliza
//./util/calculadora

//uma aplicação web é um processo que fica sendo executado em um sistema operacional

//importando o express - constante para garantir que não muda
const express = require('express');

//aplicação web - cria uma apliacação do tipo web
const app = express();

//Criando as rotas

app.get('/', (req, res) => { // req - objeto de requisição; res - objeto de resposta
    let html = '<h1>app_calculadora</h1>';
    html += '<h3>Rotas disponíveis</h3>';
    html += '<p>/somar/:a/:b  <a href= "/somar/1/2">Testar</a></p>';
    html += '<p>/subtrair/:a/:b  <a href= "/subtrair/1/2">Testar</a></p>';
    html += '<p>/multiplicar/:a/:b  <a href= "/multiplicar/1/2">Testar</a></p>';
    html += '<p>/dividir/:a/:b  <a href= "/dividir/1/2">Testar</a></p>';
    res.send(html);
});


// Soma
app.get('/somar/:a/:b', (req, res) => { // req - objeto de requisição; res - objeto de resposta
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

// Subtrair
app.get('/subtrair/:a/:b', (req, res) => { // req - objeto de requisição; res - objeto de resposta
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);
});

// Multiplicar
app.get('/multiplicar/:a/:b', (req, res) => { // req - objeto de requisição; res - objeto de resposta
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`);
});

// Dividir
app.get('/dividir/:a/:b', (req, res) => { // req - objeto de requisição; res - objeto de resposta
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`);
});


/*
parseFloat  - converte uma string para números de ponto flutuante
// Soma
app.get('/soma/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send(`A SOMA é igual a: ${calc.subtrair(a, b)}`);
});

// Subtração
app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send(`A SUBTRAÇÃO é igual a: ${calc.subtrair(a, b)}`);
});

// Multiplição
app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send(`A MULTIPLICAÇÃO é igual a: ${calc.multiplicar(a, b)}`);
});

// Divisão
app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    //verificando uma divisão por 0
    if (b === 0) {
        return res.send('!!!ERRO - Não é possível dividir por zero!!!');
    }
    res.send(`A DIVISÃO é igual a: ${calc.dividir(a, b)}`);
});
*/

//DECLARANDO UMA PORTA
//localhost - nossa própria máquina
const PORT = 8080;
app.listen(PORT, ()=>{ //função anônima
    console.log('app rodando na porta ' + PORT);
});