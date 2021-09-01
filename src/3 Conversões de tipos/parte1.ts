let umaString: any = "isso é uma string"; //tipo não definido 

console.log((<string>umaString).length) // primeiro tipo de conversão(não é aceita dentro do jsx) - conversão de uma let do tipo any para o tipo string.
console.log((umaString as string).length) // segundo tipo de conversão(aceito dentro do jsx) - conversão de uma let do tipo any para o tipo string.
