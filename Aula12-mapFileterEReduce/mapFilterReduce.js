const distanciaEmCentimetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// Map
const distanciasEmKm = distanciaEmCentimetros.map(distancia => distancia / 1000);
console.log("Distancia em KM: ", distanciasEmKm);


// Filter
// const intensFiltrados = distanciaEmCentimetros.filter((distancia, index, arrayoOriginal) =>{
//     console.log(`A distancia ${distancia} esta no indice ${index}`);
//     console.log(`Array Original ${arrayoOriginal}`);

// });


const intensFiltrados = distanciaEmCentimetros.filter(distancia => distancia > 2000);
console.log("Itens filtrados ", intensFiltrados);


// Reduce
const distanciaTotal = distanciaEmCentimetros.reduce((acc, distancia) => {
    return acc + distancia;
}, 0);

console.log("Distancia total", distanciaTotal);
