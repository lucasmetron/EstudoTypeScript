
let teste: void = undefined // somente pode receber undefined

function funcaoTeste(): void {
    console.log('teste')
    return undefined; //como é uma função tipo void, não pode retornar algo que nao seja undefined
}

let teste2: void = funcaoTeste();

// let teste3: number = undefined; // por ser do tipo number, essa let não pode receber null nem undefined

let teste4: null = null // por ser do tipo null, só pode reber null

let teste5: undefined = undefined // por ser do tipo undefined, só pode reber undefined