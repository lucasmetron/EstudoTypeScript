"use strict";
var myObj = {
    // id: 1,
    nome: 'Lucas',
    idade: 25,
};
function mostrarDecomposicao(objDesconposto) {
    var id = objDesconposto.id, nome = objDesconposto.nome, idade = objDesconposto.idade;
    console.log(id + " Este \u00E9 o nome: " + nome + ", est\u00E1 \u00E9 a idade: " + idade);
}
mostrarDecomposicao(myObj);
