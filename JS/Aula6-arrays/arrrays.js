const listaDeConvidados = ["Matheus", "Paula", "Amanda", "Izabelli"];
console.log("Voce fez aniversario e convidou: ", listaDeConvidados);
console.log("Quantos convidados: ", listaDeConvidados.length);

console.log("O primeiro convidado foi: ", listaDeConvidados[1]);
console.log("O ultimo convidado foi: ", listaDeConvidados[3]);
// Acessando o ultimo item
console.log(listaDeConvidados[listaDeConvidados.length - 1]);

const indiceDaAmanda = listaDeConvidados.indexOf("Amanda");
console.log("Amanda esta na posição: ", indiceDaAmanda);
console.log("Qual a posição da Amanda: ", indiceDaAmanda + 1);
