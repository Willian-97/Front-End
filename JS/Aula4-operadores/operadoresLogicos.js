const idade = 18;
const possuiCNH = true;
// and
console.log("A pessoa vai ser presa? ", idade >= 18 && possuiCNH === false);
//  or
const possuiRG = false;
console.log("A pessoa levou seu RG? ", possuiRG);
console.log("A pessoa é mior de idade: ", idade >= 18);
console.log("Consegui entrar ? ", possuiCNH === true || possuiRG == true);

// not
const gostaDeBeber = true;
const pessoaGostaDeBeber = !gostaDeBeber;
console.log("A pessoa gosta de beber? ", pessoaGostaDeBeber);
