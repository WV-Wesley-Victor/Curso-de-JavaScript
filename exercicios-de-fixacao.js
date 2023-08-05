//Para Módulo 1
//Escreva um programa que pergunte a idade do usuário e informe se ele já pode votar ou não.
const idade = prompt("Digite sua idade.");
if (idade >= 18) {
    console.log("Você já pode votar");
} else {
    console.log("Você não pode votar");
}

//Faça um programa que leia três números e informe qual deles é o maior.
var numeros = [1, 2, 3];
let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log("O maior numero é " + maior);

//Faça um programa que leia o nome e a idade de duas pessoas e informe quem é mais velho.
let nome = prompt("Digite seu nome");
let idade1 = prompt("Digite sua idade");
idade1 = parseInt(idade1);
let nome1 = prompt("Digite seu nome");
let idade2 = prompt("Digite sua idade");
idade2 = parseInt(idade2);
if (idade1 >= idade2) {
    console.log("O(a) " + nome + " é o mais velho");
} else {
    console.log("O(a) " + nome1 + " é o mais velho");
}

//Faça um programa que leia o nome, a idade e o sexo de uma pessoa e informe se ela pode se aposentar ou não. No Brasil, as mulheres podem se aposentar com 35 anos de contribuição e 62 anos de idade, enquanto os homens podem se aposentar com 35 anos de contribuição e 65 anos de idade.
let nome3 = prompt("Digite o nome da primeira pessoa");
let idade3 = parseInt(prompt("Digite a idade da primeira pessoa"));
let sexo1 = prompt("Digite o sexo da primeira pessoa (feminino ou masculino)");
let nome4 = prompt("Digite o nome da segunda pessoa");
let idade4 = parseInt(prompt("Digite a idade da segunda pessoa"));
let sexo2 = prompt("Digite o sexo da segunda pessoa (feminino ou masculino)");
function podeSeAposentar(idade, sexo) {
    if (
        (sexo === "feminino" && idade >= 62) ||
        (sexo === "masculino" && idade >= 65)
    ) {
        return true;
    }
    return false;
}
if (podeSeAposentar(idade3, sexo1)) {
    console.log(nome3 + " pode se aposentar");
} else {
    console.log(nome3 + " não pode se aposentar");
}
if (podeSeAposentar(idade4, sexo2)) {
    console.log(nome4 + " pode se aposentar");
} else {
    console.log(nome4 + " não pode se aposentar");
}

//Escreva um programa que leia um número inteiro e informe sua tabuada (de 1 a 10).
var number = parseInt(prompt("Digite um numero inteiro"));
for (var i = 1; i < 11; i++) {
    var resultado = number * i;
    console.log(number + " X " + i + " = " + resultado);
}

//Faça um programa que leia o nome de um usuário e o cumprimente de forma personalizada de acordo com a hora atual. Por exemplo, se for de manhã, o programa deve exibir "Bom dia, Fulano!"
var name = prompt("Digite seu nome");
var data = new Date();
var hora = data.getHours();
var cumprimento;
if (hora >= 5 && hora < 12) {
    cumprimento = "Bom dia";
} else if (hora >= 12 && hora < 18) {
    cumprimento = "Boa tarde";
} else {
    cumprimento = "Boa noite";
}
console.log(cumprimento + ", " + name + "!");

//Escreva um programa que pergunte o nome e a altura de uma pessoa e informe se ela é considerada alta ou não (considerando que, no Brasil, a média de altura para homens é de 1,72m e para mulheres é de 1,60m)...
var name1 = prompt("Digite seu nome");
var altura = parseFloat(prompt("Digite sua altura"));
var sexo3 = prompt("Digite seu sexo(masculino ou feminino)");
if (sexo3 === "masculino" && altura > 1.72) {
    console.log("Você é um homem alto");
} else if (sexo3 === "feminino" && altura > 1.6) {
    console.log("Você é uma mulher alta");
} else {
    console.log("Você não é uma pessoa alta");
}

//Faça um programa que leia o peso e a altura de uma pessoa e informe seu índice de massa corporal (IMC). O IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em metros). Se o resultado for menor do que 18,5, a pessoa está abaixo do peso; se for entre 18,5 e 24,9, está dentro do peso ideal; se for entre 25 e 29,9, está com sobrepeso; se for entre 30 e 34,9, está com obesidade grau I; se for entre 35 e 39,9, está com obesidade grau II; e se for maior do que 40, está com obesidade grau III.
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function determinarCategoriaIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Dentro do peso ideal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}
function main() {
    var peso = parseFloat(prompt("Digite o seu peso"));
    var altura1 = parseFloat(prompt("Digite a sua altura"));
    var imc = calcularIMC(peso, altura1);
    var categoriaIMC = determinarCategoriaIMC(imc);
    console.log("Seu IMC é: " + imc.toFixed(2));
    console.log("Categoria: " + categoriaIMC);
}
main();

//Escreva um programa que pergunte o nome e o salário de um funcionário e calcule seu novo salário, com um aumento de 10%.
var name2 = prompt("Digite seu nome");
var salario = parseInt(prompt("Informe seu salario"));
var novoSalario = salario * 1.1;
novoSalario = parseInt(novoSalario);
console.log("Seu salário novo é " + novoSalario + " reais.");

//Escreva um programa que exibe os números de 1 a 10.
for (var i1 = 1; i1 < 11; i1++) {
    console.log(i1);
}

//Escreva um programa que exibe os números pares de 0 a 20.
for (var i2 = 0; i2 < 21; i2++) {
    if (i2 % 2 === 0) {
        console.log(i2);
    }
}

//Escreva um programa que exibe os números de 10 a 1 em ordem decrescente.
for (var i3 = 10; i3 > 0; i3--) {
    console.log(i3);
}

//Escreva um programa que calcule a soma dos números entre 0 e 100.
var valor = 0;
for (var i4 = 0; i4 <= 100; i4++) {
    valor += i4;
}
console.log(valor);

//Para o Módulo 2​
//Crie um programa que receba um array de números como entrada e retorne a soma de todos os elementos.
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var number2 of numbers) {
    sum += number2;
}
console.log("A soma dos elementos é: " + sum);

//Crie um programa que receba um array de números como entrada e retorne o maior número presente no array.
var numbers1 = [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0];
var maior1 = 0;
for (var number3 of numbers1) {
    if (maior1 < number3) {
        maior1 = number3;
    }
}
console.log(maior1);

//Crie um programa que receba um array de números como entrada e retorne um novo array contendo apenas os números pares.
var numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbers3 = [];
for (var number4 of numbers2) {
    if (number4 % 2 === 0) {
        numbers3.push(number4);
    }
}
console.log(numbers3);
