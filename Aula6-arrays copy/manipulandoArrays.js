const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

listaDeConvidados.push("Leonardo"); // adiciona no final do array
console.log(listaDeConvidados);
listaDeConvidados.pop(); // remove o ultimo 
console.log(listaDeConvidados);
listaDeConvidados.unshift("Beatriz"); // adiciona no inicio do array
console.log(listaDeConvidados);
listaDeConvidados.shift();
console.log(listaDeConvidados);


console.log("Amanda esta na lista? ", listaDeConvidados.includes("Amanda"));
