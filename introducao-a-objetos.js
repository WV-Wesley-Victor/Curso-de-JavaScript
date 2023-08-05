//Em JavaScript, você pode criar objetos usando a sintaxe de chaves ({}) e adicionando propriedades a eles. As propriedades são pares chave-valor, onde a chave é um nome único que identifica a propriedade e o valor é o conteúdo da propriedade.
const robot = {
    nome: "Bleepop",
    material: "Aço",
    serial: 15,
    eDoMal: false,
};
console.log(robot);

//Para criar um objeto, você pode fazer o seguinte:
//Cria um objeto vazio
// var meuObjeto = {};
//Pode criar um objeto chamado "pessoa" com algumas propriedades
var pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
};
console.log(pessoa);

//Depois de criar um objeto, você pode adicionar mais propriedades a ele. Há duas maneiras de fazer isso:
// meuObjeto.propriedade = valor; // Adiciona uma nova propriedade
// meuObjeto["propriedade"] = valor; // Adiciona uma nova propriedade

let carro = {
    //Carro
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
};
console.log(carro.marca); // Saída: Toyota
console.log(carro.modelo); // Saída: Corolla
console.log(carro.ano); // Saída: 2022
console.log(carro.cor); // Saída: Prata

let livro = {
    //Livro
    titulo: "A Guerra dos Tronos",
    autor: "George R. R. Martin",
    genero: "Fantasia",
    paginas: 694,
};
console.log(livro.titulo); // Saída: A Guerra dos Tronos
console.log(livro.autor); // Saída: George R. R. Martin
console.log(livro.genero); // Saída: Fantasia
console.log(livro.paginas); // Saída: 694

let casa = {
    //Casa
    endereco: "Rua Principal, 123",
    quartos: 4,
    banheiros: 2,
    metrosQuadrados: 180,
};
console.log(casa.endereco); // Saída: Rua Principal, 123
console.log(casa.quartos); // Saída: 4
console.log(casa.banheiros); // Saída: 2
console.log(casa.metrosQuadrados); // Saída: 180

let produto = {
    //Produto
    nome: "Smartphone",
    marca: "Samsung",
    preco: 899.99,
    emEstoque: true,
};
console.log(produto.nome); // Saída: Smartphone
console.log(produto.marca); // Saída: Samsung
console.log(produto.preco); // Saída: 899.99
console.log(produto.emEstoque); // Saída: true
