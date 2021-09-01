function mostrarErro(mensagem: string): never { //usado para garantir que NUNCA iremos retornar algo, apenas estamos lançando o erro
    throw new Error('ocorreu um erro: ' + mensagem);

}

function funcaoSemFinalizacao(): never { //usado para funções que não tem fim, que NUNCA acaba
    while (true) {
        console.log('oi')
    }
}



mostrarErro('de Teste')