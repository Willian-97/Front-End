const idade = 16;
const maiorIdade = 18;

// If else
if (idade >= maiorIdade) {
    console.log("Voce pode dirigir");

} else {
    const anosFaltantes = maiorIdade - idade;
    console.log("Voce não pode dirigir");
    console.log(`Faltam ${anosFaltantes} anos para voce poder dirigir`);

}

// Ternario
idade >= maiorIdade ? console.log("Voce pode dirigir") : console.log("Voce não pode dirigir");

// if completo
const idadePessoa = 10;
// 0 - 12 anos => infancia
// 13 - 17 anos => adolescencia
// 18 - 25 => jovem adulto
// 26 - 60 anos => adulto
// mais que 60 anos => idoso

if (idadePessoa >= 0 && idadePessoa <= 12) {
    console.log("Infancia");

} else if (idadePessoa >= 13 && idadePessoa <= 17) {
    console.log("Adolescencia");

} else if (idadePessoa >= 18 && idadePessoa <= 25) {
    console.log("Jovem adulto");


} else if (idadePessoa >= 26 && idadePessoa <= 60) {
    console.log("Adulto");

} else {
    console.log("Idoso");

}