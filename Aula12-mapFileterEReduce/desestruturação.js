const nomes = ["Willian", "Maria", "Beatriz"];

// const [nome1, nome2, nome3] = nomes;

// console.log("Nome 1", nome1);
// console.log("Nome 2", nome2);
// console.log("Nome 3", nome3);

const grupos = [["Willian"], ["Maria", "Beatriz"]];

const [grupo1, grupo2] = grupos;
console.log("Grupo 1", grupo1);
console.log("Grupo 2", grupo2);

const [[nome1], [nome2, nome3]] = grupos;
console.log("Primeiro nome", nome1);
console.log("Segundo nome", nome2);
console.log("Terceiro nome", nome3);


const pessoa = {
    nome: "Willian",
    sobrenome: "Gasparini",
    estudos: ["Html", "Css", "JS"],
};

const { nome, sobrenome, estudos } = pessoa;
console.log(nome, sobrenome);
console.log(estudos);

const { nome: primeiroNome, sobrenome: segundoNome, estudos: tecnologias } = pessoa;
console.log(primeiroNome, segundoNome);
console.log(tecnologias);

const pessoas = {
    pessoa1: {
        nome: "Willian",
        sobrenome: "Gasparini"
    },
    idade: 28,
};

const { pessoa1: { nome: firstName, sobrenome: lastName }, idade } = pessoas;

console.log(`${firstName} ${lastName} tem a idade de ${idade} anos`);
