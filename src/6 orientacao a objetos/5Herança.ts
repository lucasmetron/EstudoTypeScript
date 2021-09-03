interface IAnimal {
    nome: string,
    idade: number,
    estaVivo: boolean,

    nascer(): void,
    crescer(): void,
    morrer(): void,
}


class AnimallClass implements IAnimal { // uma classes pode implementar várias interfaces

    nome: string;
    idade: number;
    private _estaVivo: boolean;

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

class Duck extends AnimallClass { //extends faz com que a Classe Duck herde tudo da classe AnimallClass. Uma classe pode herdar no TS somente uma única outra classe.

    nadar(): void {
        console.log('o pato esta nadando...')
    }
}

let duck: Duck = new Duck('Cacau');
console.log(duck);
duck.nascer();
console.log(duck);
duck.crescer()
duck.nadar()
duck.morrer();
console.log(duck.estaVivo = true);
console.log(duck.estaVivo);




