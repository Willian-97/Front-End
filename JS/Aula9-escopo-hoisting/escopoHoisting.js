// Global
// Bloco
// Função

const x = "Variavel global";

// escopo de bloco
if (x) {
    const z = "Variavel de bloco"; // não pode ser acessado em outros escopos 
    console.log('X é igual a ', x);
    console.log('Z é', z);
}

// escopo de função
const funcao = () => {
    const a = "Variavel do escopo da função"; // não pode ser acessado em outros escopos
    console.log("Na função A é uma", a);
}
funcao();


