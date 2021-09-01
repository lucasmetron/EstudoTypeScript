"use strict";
var meusNumeros = [1, 2, 3, 4, 5];
var primeiro = meusNumeros[0], segundo = meusNumeros[1], terceiro = meusNumeros[2], quarto = meusNumeros[3], quinto = meusNumeros[4]; // Essa desconstrução já é nativa do JS
var numero1 = meusNumeros[0]; // Essa desconstrução já é nativa do JS
var primeiroNumero = meusNumeros[0], terceiroNumero = meusNumeros[2]; // Essa desconstrução já é nativa do JS
var ultimo = meusNumeros[4]; // Essa desconstrução já é nativa do JS
var primeiroNumeroAgain = meusNumeros[0], resto = meusNumeros.slice(1); // Essa desconstrução já é nativa do JS
console.log(primeiro);
console.log(numero1);
console.log(primeiroNumero, terceiroNumero);
console.log(ultimo);
console.log(meusNumeros[4]);
console.log(resto);
