"use strict";
var myObj = {
    // id: 1,
    nome: 'Lucas',
    idade: 25,
};
//Se passarmos uma '?' no parametro id, dizemos que ele é um parâmetro opcional, caso não tenha chave id no objeto recebido, id recebe o valor undefined.
function mostrarDecomposicao(objDesconposto) {
    var _a = objDesconposto.id, id = _a === void 0 ? 10 : _a, nome = objDesconposto.nome, idade = objDesconposto.idade; //como passamos 10 para o id, caso não haja a chave id no objeto passado para função, o id ficará com o valor de 10
    console.log(id + " Este \u00E9 o nome: " + nome + ", est\u00E1 \u00E9 a idade: " + idade);
}
mostrarDecomposicao(myObj);
