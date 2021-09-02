let primerioArray: number[] = [1, 2, 3]
let segundoArray: number[] = [5, 6, 7]

let arrayJuncao: number[] = [0, ...primerioArray, 4, ...segundoArray]; //nativo do JS 

let meuObjetoSpread = {
    id: 1,
    nome: "treinaweb"
}

let novoObj = { ...meuObjetoSpread, idade: 5 } //Melhoria do TS, não existe isso no JS

console.log(arrayJuncao)
console.log(novoObj)