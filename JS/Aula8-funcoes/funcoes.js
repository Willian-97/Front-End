// função sem parametro em sem retorno
// function imprimir() {
//     console.log("Olá mundo");

// }

// evitando hoisting, usando expressão de funções
const imprimir = function (impressao) {
    console.log(impressao);
}
imprimir("Olá mundo");


// function calcularSoma(valor1, valor2) {
//     return valor1 + valor2;
// }
const valor1 = 2;
const valor2 = 4;

const calcularSoma = function(valor1, valor2) {
    return valor1 + valor2;
}

imprimir(`A soma entre ${valor1} e ${valor2} é: ${calcularSoma(valor1, valor2)}`);
