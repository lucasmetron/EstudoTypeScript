let meusNumeros: number[] = [1, 2, 3, 4, 5]

let [primeiro, segundo, terceiro, quarto, quinto] = meusNumeros; // Essa desconstrução já é nativa do JS
let [numero1] = meusNumeros; // Essa desconstrução já é nativa do JS
let [primeiroNumero, , terceiroNumero] = meusNumeros; // Essa desconstrução já é nativa do JS
let [, , , , ultimo] = meusNumeros; // Essa desconstrução já é nativa do JS
let [primeiroNumeroAgain, ...resto] = meusNumeros; // Essa desconstrução já é nativa do JS

console.log(primeiro)
console.log(numero1)
console.log(primeiroNumero, terceiroNumero)
console.log(ultimo)
console.log(meusNumeros[4])
console.log(resto)