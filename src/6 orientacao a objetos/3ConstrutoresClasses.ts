interface IAnimal { //Toda interface começa com I, por padrão
    nome: string,
    idade: number,
    estaVivo: boolean,

    nascer(): void,
    crescer(): void,
    morrer(): void,
}

class Animall implements IAnimal { //aqui implementamos a interface a classe

    nome: string; //é colocado '!' para não precisar inicializar a propriedade no construtor 
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number = 0) { //valores padrão para todos os animais, passado na instaciação do objeto | nome é obrigatório ser passado, ja idade é opcional pois a mesma tem valor inicial
        this.nome = nome
        this.idade = idade;
        this.estaVivo = false
    }

    nascer(): void {
        this.estaVivo = true
        console.log('Animal nasceu')
    }

    crescer(): void {
        this.idade += 1;
        console.log('Animal cresceu')
    }

    morrer(): void {
        this.estaVivo = false
        console.log('Animal morreu')
    }
}

let dog: Animall = new Animall('Cacau'); //no new Animall, é disparado o metodo construtor do Animall. Nome é obrigatório ser passado, ja idade é opcional pois a mesma tem valor inicial
console.log(dog)
dog.nascer();
console.log(dog)
dog.crescer()
dog.morrer();
console.log(dog)


