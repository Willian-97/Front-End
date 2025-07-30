// Objeto
const fichaDoWillian = {
    nome: "Willian",
    idade: 28,
    profissao: "Desenvolvedor",
    temFilhos: false,
};

console.log("Ficha do Willian: ",fichaDoWillian);
console.log("Nome: ", fichaDoWillian.nome);
// Adicionando propriedades
fichaDoWillian.carro = "Celta";

console.log("Ficha do Willian: ", fichaDoWillian);
// Deltando propriedades
delete fichaDoWillian.carro;

console.log(fichaDoWillian.carro);

// Criando objeto usando variaveis para chave - valor
const nome = "Will";
const idade = 28;
const temFilho = false;

const fichaWill = {
    nome,
    idade,
    temFilho,
}

console.log(fichaWill);



