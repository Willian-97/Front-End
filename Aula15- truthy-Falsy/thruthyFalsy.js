// Todos falsy
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Todos thruthy
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("Ola Mundo"));
console.log(Boolean("{valor: 1, valor: 2}"));
console.log(Boolean([1, 'a', 2]));
console.log(Boolean({}));
console.log(Boolean([]));

// exemplo de uso

const nomes = ["Willian", "Beatriz", "", "Matheus"];

console.log("Nomes: ", nomes);

const nomesFiltrados = nomes.filter((nome) => nome);
console.log("Nomes filtrados:", nomesFiltrados);

const x = 10;
const y = NaN;

if (x) {
    console.log("É thruthy ", x);

} else {
    console.log("É Falsy", x);

}

if (y) {
    console.log("É Thruthy: ", y);

} else {
    console.log("É Falsy", y);

}