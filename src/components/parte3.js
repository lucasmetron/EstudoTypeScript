"use strict";
var teste = undefined; // somente pode receber undefined, pois é esse o tipo
function funcaoTeste() {
    console.log('teste');
    return undefined; //como é uma função tipo void, não pode retornar algo que nao seja undefined
}
var teste2 = funcaoTeste();
