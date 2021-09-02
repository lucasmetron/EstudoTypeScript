let myObj = {
    // id: 1,
    nome: 'Lucas',
    idade: 25,
}

//Se passarmos uma '?' no parametro id, dizemos que ele é um parâmetro opcional, caso não tenha chave id no objeto recebido, id recebe o valor undefined.

function mostrarDecomposicao(objDesconposto: { id?: number, nome: string, idade: number }): void { //Veja que foi tipado o parametro que a func espera e a func foi tipada como void pois não retorna nada
    let { id = 10, nome, idade } = objDesconposto; //como passamos 10 para o id, caso não haja a chave id no objeto passado para função, o id ficará com o valor de 10
    console.log(`${id} Este é o nome: ${nome}, está é a idade: ${idade}`)
}

mostrarDecomposicao(myObj);