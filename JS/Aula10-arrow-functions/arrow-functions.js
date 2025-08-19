const calcularSoma1 = (valor1, valor2) => valor1 + valor2;

const calcularSoma2 = (valor1, valor2) => {
    console.log("Vamos somar");
    
    return valor1 + valor2;
}

const imprimir = imprimir => console.log(imprimir);

console.log(calcularSoma1(50, 25)); 
console.log(calcularSoma2(2, 7));
imprimir("Olá, mundo!");