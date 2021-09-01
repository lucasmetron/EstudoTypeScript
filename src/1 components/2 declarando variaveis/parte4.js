"use strict";
function mostrarErro(mensagem) {
    throw new Error('ocorreu um erro: ' + mensagem);
}
function funcaoSemFinalizacao() {
    while (true) {
        console.log('oi');
    }
}
mostrarErro('de Teste');
