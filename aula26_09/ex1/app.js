const alunos = {};

alunos[1] = "Matheus";
alunos[2] = "Pedro";
alunos[3] = "Carlos";

console.log("Alunos:")

for(const chave in alunos) {
    console.log(`${chave}: ${alunos[chave]}`);
}