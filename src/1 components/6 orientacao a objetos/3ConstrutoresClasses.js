"use strict";
var Animall = /** @class */ (function () {
    function Animall(nome, idade) {
        if (idade === void 0) { idade = 0; }
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = false;
    }
    Animall.prototype.nascer = function () {
        this.estaVivo = true;
        console.log('Animal nasceu');
    };
    Animall.prototype.crescer = function () {
        this.idade += 1;
        console.log('Animal cresceu');
    };
    Animall.prototype.morrer = function () {
        this.estaVivo = false;
        console.log('Animal morreu');
    };
    return Animall;
}());
var dog = new Animall('Cacau'); //no new Animall, é disparado o metodo construtor do Animall. Nome é obrigatório ser passado, ja idade é opcional pois a mesma tem valor inicial
console.log(dog);
dog.nascer();
console.log(dog);
dog.crescer();
dog.morrer();
console.log(dog);
