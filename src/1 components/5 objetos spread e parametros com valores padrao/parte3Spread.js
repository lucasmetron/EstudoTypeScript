"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var primerioArray = [1, 2, 3];
var segundoArray = [5, 6, 7];
var arrayJuncao = __spreadArray(__spreadArray(__spreadArray([0], primerioArray, true), [4], false), segundoArray, true); //nativo do JS 
var meuObjetoSpread = {
    id: 1,
    nome: "treinaweb"
};
var novoObj = __assign(__assign({}, meuObjetoSpread), { idade: 5 }); //Melhoria do TS, não existe isso no JS
console.log(arrayJuncao);
console.log(novoObj);
