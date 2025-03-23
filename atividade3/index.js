const calc = require('./calculadora');

//importando o express - constante para garantir que não muda
const express = require('express');

//aplicação web
const app = express();

// Soma
app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send(`A SOMA é igual a: ${calc.somar(a, b)}`);
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


//DECLARANDO UMA PORTA
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});