"use strict";
var AnimalClass = /** @class */ (function () {
    function AnimalClass(nome, idade) {
        if (idade === void 0) { idade = 0; }
        this.nome = nome;
        this.idade = idade;
        this._estaVivo = false;
    }
    Object.defineProperty(AnimalClass.prototype, "estaVivo", {
        get: function () {
            return this._estaVivo;
        },
        set: function (estaVivo) {
            this._estaVivo = estaVivo;
        },
        enumerable: false,
        configurable: true
    });
    AnimalClass.prototype.nascer = function () {
        this._estaVivo = true;
        console.log('Animal nasceu');
    };
    AnimalClass.prototype.crescer = function () {
        this.idade += 1;
        console.log('Animal cresceu');
    };
    AnimalClass.prototype.morrer = function () {
        this._estaVivo = false;
        console.log('Animal morreu');
    };
    return AnimalClass;
}());
var cat = new AnimalClass('Cacau');
console.log(cat);
cat.nascer();
console.log(cat);
cat.crescer();
cat.morrer();
// cat.estaVivo = true ; //Se não houve o método SET, daria erro pois o estaVivo só retorna o valor de _estaVivo 
console.log(cat.estaVivo = true);
console.log(cat.estaVivo);
