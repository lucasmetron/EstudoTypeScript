"use strict";
// let exemplo: [string, string] = ['run', 'correr']
// let campeaoBrasileiro: [string, number] = ['Palmeiras', 2016]
// let campeaoBrasileiro2: [string, number] = ['Corinthians', 2015]
// let campeaoBrasileiro3: [string, number] = ['Cruzeiro', 2014]
// campeaoBrasileiro[0] = 4 //Invalido 
// campeaoBrasileiro[0] = 'Internacional' //Válido 
// campeaoBrasileiro[2] = 'Internacional' //Inválido pois o tipo é inexistente
// campeaoBrasileiro[2] = false //Inválido pois o tipo é inexistente
// console.log(campeaoBrasileiro[0] + campeaoBrasileiro[1])
// console.log(campeaoBrasileiro[2])
var state = 0; //0 representa false, não é uma boa pratida, chamado de bad smell;
var State;
(function (State) {
    State[State["Desabilitado"] = 0] = "Desabilitado";
    State[State["Habilitado"] = 1] = "Habilitado";
})(State || (State = {})); //Apilidando Desabilitado = 0 e Habilitado = 1
var Teste;
(function (Teste) {
    Teste[Teste["Desabilitado"] = 20] = "Desabilitado";
    Teste[Teste["Habilitado"] = 35] = "Habilitado";
})(Teste || (Teste = {})); // Podemos passar qualquier valor
var myState = State.Desabilitado;
var myState2 = State.Habilitado;
var myState3 = State[State.Habilitado]; //Vai retornar o valor que está escrito na chave do enum, ou seja, Habilitado.
console.log(myState); //resultado será 0  
console.log(myState2); //resultado será 1  
console.log(myState3); //resultado será 1  
var v = 2;
console.log(v.toExponential());
