interface IAnimal { //Toda interface começa com I, por padrão
    nome: string,
    idade: number,
    estaVivo: boolean,

    nascer(): void,
    crescer(): void,
    morrer(): void,
}

