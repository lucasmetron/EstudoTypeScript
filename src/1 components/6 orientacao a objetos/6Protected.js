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
var Animal1 = /** @class */ (function () {
    function Animal1(nome, idade) {
        if (idade === void 0) { idade = 0; }
        this.nome = nome;
        this.idade = idade;
        this._estaVivo = false;
    }
    Object.defineProperty(Animal1.prototype, "estaVivo", {
        get: function () {
            return this._estaVivo;
        },
        set: function (estaVivo) {
            this._estaVivo = estaVivo;
        },
        enumerable: false,
        configurable: true
    });
    Animal1.prototype.nascer = function () {
        this._estaVivo = true;
        console.log('Animal nasceu');
    };
    Animal1.prototype.crescer = function () {
        this.idade += 1;
        console.log('Animal cresceu');
    };
    Animal1.prototype.morrer = function () {
        this._estaVivo = false;
        console.log('Animal morreu');
    };
    return Animal1;
}());
var Peixe = /** @class */ (function (_super) {
    __extends(Peixe, _super);
    function Peixe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._quantidadeDeComida = 5;
        return _this;
    }
    Peixe.prototype.nadar = function () {
        if (this._quantidadeDeComida <= 3) {
            console.log('o pato esta nadando...');
        }
        else {
            console.log('morreu de tando comer');
            this._estaVivo = false; //permite alterar este atributo de Animal1 pq _estaVivo é um atributo PROTECTED
            console.log(this.estaVivo);
        }
    };
    return Peixe;
}(Animal1));
var peixe = new Peixe('Cacau');
console.log(peixe);
peixe.nascer();
console.log(peixe);
peixe.crescer();
peixe.nadar(); //método que só existe na classe peixe que herda todos os outros atributos e métodos da calsse animal
