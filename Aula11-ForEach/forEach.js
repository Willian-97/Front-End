const notasFinais = [
    { nome: "Willian", nota: 5 },
    { nome: "Beatriz", nota: 8 },
    { nome: "Paula", nota: 5 },
    { nome: "Matheus", nota: 7 },
];

// for (let i = 0; i < notasFinais.length; i++) {
//     if(notasFinais[i].nota >= 6) {
//         console.log(`O Aluno ${notasFinais[i].nome} esta aprovado com nota ${notasFinais[i].nota}`);

//     }else{
//         console.log(`O Aluno ${notasFinais[i].nome} esta Reprovado com a nota ${notasFinais[i].nota}`);
//     }
// }


for (let aluno of notasFinais) {
    if (aluno.nota >= 6) {
        console.log(`O Aluno ${aluno.nome} esta aprovado com nota ${aluno.nota}`);

    } else {
        console.log(`O Aluno ${aluno.nome} esta Reprovado com a nota ${aluno.nota}`);
    }
}

console.log('---------------------------');


notasFinais.forEach((aluno) => {
    if (aluno.nota >= 6) {
        console.log(`O Aluno ${aluno.nome} esta aprovado com nota ${aluno.nota}`);

    } else {
        console.log(`O Aluno ${aluno.nome} esta Reprovado com a nota ${aluno.nota}`);
    }
})