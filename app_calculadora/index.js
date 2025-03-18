//pegando a calculadora que está na mesma pasta
const calc = require('./calculadora');

//importando o express - constante para garantir que não muda
const express = require('express');

//aplicação web
const app = express();

app.get('/', (req, res)=>{
    res.send('Olá, mundo!');
});

//Pegando valores que o usuário digita no navegador
app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`);
});

//DECLARANDO UMA PORTA
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});