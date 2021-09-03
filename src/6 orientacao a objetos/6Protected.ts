interface IAnimal {
    nome: string,
    idade: number,
    estaVivo: boolean,

    nascer(): void,
    crescer(): void,
    morrer(): void,
}


class Animal1 implements IAnimal { // uma classes pode implementar várias interfaces

    nome: string;
    idade: number;
    protected _estaVivo: boolean; //Protected deixa disposnivel este atributo para a classe dele mesmo e para classes que herdam Anima1

    get estaVivo() {
        return this._estaVivo
    }

    set estaVivo(estaVivo: boolean) {
        this._estaVivo = estaVivo
    }

    constructor(nome: string, idade: number = 0) {
        this.nome = nome
        this.idade = idade;
        this._estaVivo = false
    }

    nascer(): void {
        this._estaVivo = true
        console.log('Animal nasceu')
    }

    crescer(): void {
        this.idade += 1;
        console.log('Animal cresceu')
    }

    morrer(): void {
        this._estaVivo = false
        console.log('Animal morreu')
    }
}

class Peixe extends Animal1 { //extends faz com que a Classe peixe herde tudo da classe Animal1. Uma classe pode herdar no TS somente uma única outra classe.

    private _quantidadeDeComida: number = 5;

    nadar(): void {
        if (this._quantidadeDeComida <= 3) {
            console.log('o pato esta nadando...')
        } else {
            console.log('morreu de tando comer')
            this._estaVivo = false; //permite alterar este atributo de Animal1 pq _estaVivo é um atributo PROTECTED
            console.log(this.estaVivo)
        }

    }
}

let peixe: Peixe = new Peixe('Cacau');
console.log(peixe);
peixe.nascer();
console.log(peixe);
peixe.crescer()
peixe.nadar() //método que só existe na classe peixe que herda todos os outros atributos e métodos da calsse animal





