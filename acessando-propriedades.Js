//para acessar as propriedades de um objeto, você pode usar novamente a notação de ponto ou a notação de colchetes:​ console.log(pessoa.nome); // Saída: "João" console.log(pessoa["idade"]); // Saída: 30
//Você também pode alterar o valor de uma propriedade existente, atribuindo um novo valor a ela: pessoa.idade = 31; // Altera o valor da propriedade "idade" para 31
const key = "arma";
const robot = {
    nome: "Bleepop",
    material: "Aço",
    serial: 15,
    eDoMal: false,
    [key]: "Lazer",
    ["tipoTank"]: "Tank de Ozonio",
};
console.log(robot);
console.log(robot.nome);
console.log(robot.tipoTank);
console.log(robot.arma);

const pessoa = {
    //Acessando propriedades de um objeto
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
};
console.log(pessoa.nome); // Saída: João
console.log(pessoa.idade); // Saída: 30
console.log(pessoa.profissao); // Saída: Engenheiro

const propriedade = "nome"; //Acessando propriedades com nomes dinâmicos usando colchetes
console.log(pessoa[propriedade]); // Saída: João

const empresa = {
    //Acessando propriedades aninhadas em objetos:
    nome: "Exemplo Corp.",
    endereco: {
        rua: "Rua Principal",
        cidade: "Cidade X",
    },
};
console.log(empresa.endereco.rua); // Saída: Rua Principal
console.log(empresa.endereco.cidade); // Saída: Cidade X

const carro = {
    //Verificando a existência de uma propriedade usando hasOwnProperty
    marca: "Toyota",
    modelo: "Corolla",
};
if (carro.hasOwnProperty("marca")) {
    console.log("O carro tem a propriedade marca.");
} else {
    console.log("O carro não tem a propriedade marca.");
}
