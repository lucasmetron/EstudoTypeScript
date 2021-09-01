"use strict";
function mostrarErro(mensagem) {
    // throw new Error('ocorreu um erro: ' + mensagem);
    throw console.log('ocorreu um erro: ' + mensagem);
}
mostrarErro('de Teste');
