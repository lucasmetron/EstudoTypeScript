let meuObjeto = {
    id: 1,
    nome: 'Treinaweb',
    idade: 10,
}


let { id } = meuObjeto; // Este tipo de descontrução é nativo do JS
let { nome, ...novoObjeto } = meuObjeto; // A desconstrução do resto do objeto ainda não é nativa do JS, exclusiva do TS


console.log(id)
console.log(nome)
console.log(novoObjeto)