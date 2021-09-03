"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimallClass = /** @class */ (function () {
    function AnimallClass(nome, idade) {
        if (idade === void 0) { idade = 0; }
        this.nome = nome;
        this.idade = idade;
        this._estaVivo = false;
    }
    Object.defineProperty(AnimallClass.prototype, "estaVivo", {
        get: function () {
            return this._estaVivo;
        },
        set: function (estaVivo) {
            this._estaVivo = estaVivo;
        },
        enumerable: false,
        configurable: true
    });
    AnimallClass.prototype.nascer = function () {
        this._estaVivo = true;
        console.log('Animal nasceu');
    };
    AnimallClass.prototype.crescer = function () {
        this.idade += 1;
        console.log('Animal cresceu');
    };
    AnimallClass.prototype.morrer = function () {
        this._estaVivo = false;
        console.log('Animal morreu');
    };
    return AnimallClass;
}());
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Duck.prototype.nadar = function () {
        console.log('o pato esta nadando...');
    };
    return Duck;
}(AnimallClass));
var duck = new Duck('Cacau');
console.log(duck);
duck.nascer();
console.log(duck);
duck.crescer();
duck.nadar();
duck.morrer();
console.log(duck.estaVivo = true);
console.log(duck.estaVivo);
