"use strict";
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.nascer = function () {
        console.log('Animal nasceu');
    };
    Animal.prototype.crescer = function () {
        console.log('Animal cresceu');
    };
    Animal.prototype.morrer = function () {
        console.log('Animal morreu');
    };
    return Animal;
}());
var cachorro = new Animal();
cachorro.nome = 'Cacau';
cachorro.idade = 8;
cachorro.crescer();
console.log(cachorro.nome, cachorro.idade);
var cachorro2 = new Animal();
cachorro2.nome = 'Billy';
cachorro2.idade = 10;
cachorro2.crescer();
console.log(cachorro2.nome, cachorro2.idade);
