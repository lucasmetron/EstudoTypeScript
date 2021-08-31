"use strict";
var meuBooleando = true;
var meuNumero = 50.5; //para numeros, nao possui diferença entre int e float na tipagem, tudo é number
var meuTexto = 'Olá, treinaweb!';
var logradouro = "Avenida Paulista";
var numero = "123b";
var cidade = "São Paulo";
var estado = "SP";
console.log("Endere\u00E7o: " + logradouro + ", " + numero + ". " + cidade + ", " + estado + " "); //string partnes ou interpolação de string. Isso já nao é exclusividade do TS pois já é nativo do JS
