const listaDeConvidados = ["Willian", "Beatriz", "Ines"];

const segundaLista = [...listaDeConvidados, "Matheus", "Sara"];

console.log(segundaLista);


// criando uma copia 
const listaDeConvidados2 = [...listaDeConvidados];
listaDeConvidados2.push("Josnei");
console.log(listaDeConvidados);
console.log(listaDeConvidados2);

console.log('-------------------');

// Spread em objeto

const professor1 = {
    materia: "Matematica",
    escola: "Escola 1",
    nome: "Beatriz",
}

const professor2 = {
    ...professor1,
    nome: "Willian",
}

console.log(professor1);
console.log(professor2);

