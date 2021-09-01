"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var meuObjeto = {
    id: 1,
    nome: 'Treinaweb',
    idade: 10,
};
//TIPO DE DESCONSTRUÇÃO DE OBJETO JÁ É NATIVO DO JS
var id = meuObjeto.id, meuNovoObjeto = __rest(meuObjeto, ["id"]); //chaves precisão exatas ao do obejto desconstuido
console.log(id);
console.log(meuNovoObjeto);
