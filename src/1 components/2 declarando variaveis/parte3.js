"use strict";
var teste = undefined; // somente pode receber undefined
function funcaoTeste() {
    console.log('teste');
    return undefined; //como é uma função tipo void, não pode retornar algo que nao seja undefined
}
var teste2 = funcaoTeste();
// let teste3: number = undefined; // por ser do tipo number, essa let não pode receber null nem undefined
var teste4 = null; // por ser do tipo null, só pode reber null
var teste5 = undefined; // por ser do tipo undefined, só pode reber undefined
