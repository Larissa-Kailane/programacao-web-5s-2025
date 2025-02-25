//Aula 1 - TIPOS DE VARIAVEIS

//console.log('Hello, world!');

const n = 3;
//n = 5

var j = 2;
console.log("j="+j);

//declara uma variável apenas uma vez
let i = 4;
console.log("i="+i);

/*Tipos primitivos JS
- String
- Number
- Bollean
- Null
- Undefined
*/

let minhaString = "Texto String";
minhaString = 'Texto String';
minhaString = 'Texto "String'; //As aspas duplas aparecem como parte do texto

console.log(minhaString);


let nome = "João";
cpf = '123';
telefone = '1234';

//template string
let tString = `Meu nome é ${nome}. Meu cpf é ${cpf}. Telefone: ${telefone}`;

//todas as variáveis são do tipo number
let x = 5.0;
x = .5; // o mesmo que 0.5
x = 3;

//para saber o tipo
//console.log(typeof x);
//console.log(typeof tString);

let verdadeiro = true;
let falso = false;

let conexao = null; //nulo
let conexao2; //indefinda

//operadores
//*, -, +, /
let y = x * x;
console.log('y='+y);




