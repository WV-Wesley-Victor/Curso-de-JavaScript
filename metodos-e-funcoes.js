const key = "arma";
const robot = {
    nome: "Bleepop",
    material: "Aço",
    serial: 15,
    eDoMal: false,
    [key]: "Lazer",
    ["tipoTank"]: "Tank de Ozonio",
};

const robot02 = {
    nome: "Bleepop02",
    material: "Aço",
    serial: 13,
    eDoMal: false,
    correr: () => {
        console.log("Estou correndo" + this.nome);
    },
};
robot02.correr();

const robot03 = {
    nome: "Bleepop03",
    material: "Aço",
    serial: 10,
    eDoMal: false,
    correr: function () {
        console.log("Estou correndo" + this.nome);
    },
};
robot03.correr();

const robot04 = {
    nome: "Bleepop04",
    material: "Aço",
    serial: 10,
    eDoMal: false,
    correr() {
        console.log("Estou correndo" + this.nome);
    },
};
robot04.correr();

// console.log(robot);
// console.log(robot.nome);
// console.log(robot.tipoTank);
// console.log(robot.arma);

let texto = "Exemplo de Texto"; //Método toUpperCase() e Função toLowerCase()
console.log(texto.toUpperCase()); // Saída: "EXEMPLO DE TEXTO"
console.log(texto.toLowerCase()); // Saída: "exemplo de texto"

let numeros = [1, 2, 3, 4, 5]; //Método push() e Função para Somar Elementos de um Array
numeros.push(6);
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]
function somarArray(arr) {
    let soma = 0;
    for (let num of arr) {
        soma += num;
    }
    return soma;
}
console.log(somarArray(numeros)); // Saída: 21

let data = "2023-08-04"; //Método substring() e Função para Formatar Data
console.log(data.substring(5)); // Saída: "08-04"
function formatarData(data) {
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
console.log(formatarData(data)); // Saída: "04/08/2023"

let letra = "a"; //Método charAt() e Função para Verificar se uma Letra é Vogal
console.log(letra.charAt(0)); // Saída: "a"
function ehVogal(letra) {
    return "aeiouAEIOU".includes(letra);
}
console.log(ehVogal(letra)); // Saída: true

let numeros1 = [1, 2, 3, 4, 5]; //Método map() e Função para Dobrar Números em um Array
let dobrados = numeros1.map((num) => num * 2);
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]
function dobrarNumeros(arr) {
    return arr.map((num) => num * 2);
}
console.log(dobrarNumeros(numeros1)); // Saída: [2, 4, 6, 8, 10]

let raio = 5.67; //Método toFixed() e Função para Calcular Área de um Círculo
console.log(raio.toFixed(2)); // Saída: "5.67"
function calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
}
console.log(calcularAreaCirculo(raio).toFixed(2)); // Saída: "101.51"
