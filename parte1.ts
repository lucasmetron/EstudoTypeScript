let meuBooleando: boolean = true;
let meuNumero: number = 50.5 //para numeros, nao possui diferença entre int e float na tipagem, tudo é number
let meuTexto: string = 'Olá, treinaweb!'

let logradouro: string = "Avenida Paulista"
let numero: string = "123b"
let cidade: string = "São Paulo"
let estado: string = "SP"

console.log(`Endereço: ${logradouro}, ${numero}. ${cidade}, ${estado} `) //string partnes ou interpolação de string. Isso já nao é exclusividade do TS pois já é nativo do JS

let meuArray: number[] = [1, 2, 3, 4, 5] //tipando array
let meuArray2: Array<number> = [6, 7, 8, 9, 10] //tipando array método diamente que tem o mesmo efeito acima

console.log(meuArray)
console.log(meuArray2)

