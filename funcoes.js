console.log("Estou rodando no node");

function helloWorld() {
    console.log("Hello world");
}

function somar(a, b) {
    //Função para Somar Dois Números
    return a + b;
}
const resultadoSoma = somar(5, 3); // Chama a função e atribui o resultado a uma variável
console.log(resultadoSoma); // Saída: 8

function verificarPar(numero) {
    //Verificar se o numero é par
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const numero1 = 10;
const numero2 = 7;
console.log(verificarPar(numero1)); // Saída: true
console.log(verificarPar(numero2)); // Saída: false

function encontrarMaiorElemento(lista) {
    //Função para Encontrar o Maior Elemento em uma Lista:
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return maior;
}
const numeros = [7, 14, 3, 21, 9, 11];
const maiorNumero = encontrarMaiorElemento(numeros);
console.log(maiorNumero); // Saída: 21

function verificarPalindromo(texto) {
    //Função para Verificar Palíndromos
    const textoFormatado = texto.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove caracteres não alfanuméricos e transforma em minúsculas
    const textoReverso = textoFormatado.split("").reverse().join("");
    return textoFormatado === textoReverso;
}
const palavra1 = "radar";
const palavra2 = "programação";
console.log(verificarPalindromo(palavra1)); // Saída: true
console.log(verificarPalindromo(palavra2)); // Saída: false

function gerarNumeroAleatorio(min, max) {
    //Função para Gerar um Número Aleatório entre um Intervalo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numeroAleatorio = gerarNumeroAleatorio(1, 100);
console.log(numeroAleatorio); // Saída: um número aleatório entre 1 e 100

const varHelloWorld = function () {
    //Agora, vamos falar sobre as funções anônimas. Uma função anônima é uma função sem nome e é definida usando a palavra-chave function sem especificar um nome para a função. Essas funções podem ser atribuídas a uma variável ou passadas como argumentos para outras funções.
    console.log("Hello world usando função anonima");
};

(function () {
    //Função anônima autoexecutável (Immediately Invoked Function Expression - IIFE)
    console.log("Esta é uma função anônima autoexecutável!");
})();

const numbers = [1, 2, 3, 4, 5]; //Função anônima como argumento de outra função
const squared = numbers.map(function (num) {
    return num * num;
});
console.log(squared); // [1, 4, 9, 16, 25]

function multiplier(factor) {
    //Função anônima como retorno de outra função
    return function (num) {
        return num * factor;
    };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

const arrowHelloWorld = () => {
    //Em seguida, temos as funções de seta (arrow functions). Elas são uma sintaxe mais concisa e introduzidas no ECMAScript 6 (ES6).
    console.log("Hello world usando função arrow");
};

const soma = (a, b) => a + b; //Função de Soma
console.log(soma(2, 3)); // Saída: 5

const verificarMaioridade = (idade) => {
    //Função de Verificação de Maioridade
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
};
console.log(verificarMaioridade(22)); // Saída: "Maior de idade"
console.log(verificarMaioridade(16)); // Saída: "Menor de idade"

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Função de Mapeamento de Números Pares
const pares = numeros1.filter((numero1) => numero1 % 2 === 0);
console.log(pares); // Saída: [2, 4, 6, 8, 10]

helloWorld();
varHelloWorld();
arrowHelloWorld();
