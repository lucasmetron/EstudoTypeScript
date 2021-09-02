interface IAnimal { //Toda interface começa com I, por padrão
    nome: string,
    idade: number,
    estaVivo: boolean,

    nascer(): void,
    crescer(): void,
    morrer(): void,
}

class Animal implements IAnimal {

    // constructor() {
    //     this.nome = 'Elefante'  //(exemplo)
    //     this.idade = 10
    //     this.estaVivo = true
    // }

    nome!: string; //é colocado '!' para não precisar inicializar a propriedade no construtor 
    idade!: number;
    estaVivo!: boolean;

    nascer(): void {
        console.log('Animal nasceu')
    }

    crescer(): void {
        console.log('Animal cresceu')
    }

    morrer(): void {
        console.log('Animal morreu')
    }
}

let cachorro: Animal = new Animal();
cachorro.nome = 'Cacau'
cachorro.idade = 8
cachorro.crescer()
console.log(cachorro.nome, cachorro.idade)

let cachorro2: Animal = new Animal();
cachorro2.nome = 'Billy'
cachorro2.idade = 10
cachorro2.crescer()
console.log(cachorro2.nome, cachorro2.idade)



