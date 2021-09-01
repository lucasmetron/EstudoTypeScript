
let teste: void = undefined // somente pode receber undefined, pois é esse o tipo

function funcaoTeste(): void {
    console.log('teste')
    return undefined; //como é uma função tipo void, não pode retornar algo que nao seja undefined
}

let teste2: void = funcaoTeste();