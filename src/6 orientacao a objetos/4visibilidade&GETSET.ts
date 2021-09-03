interface IAnimal {
    nome: string,
    idade: number,
    estaVivo: boolean,

    nascer(): void,
    crescer(): void,
    morrer(): void,
}

class AnimalClass implements IAnimal {

    nome: string;
    idade: number;
    private _estaVivo: boolean; //Não é o atributo que foi setado na interface

    get estaVivo() { //como tem o mesmo nome do atributo da interface, esse representa o mesmo. Método get só permite pegar a informação
        return this._estaVivo
    }

    set estaVivo(estaVivo: boolean) {  //como tem o mesmo nome do atributo da interface, esse representa o mesmo. Método set só permite setar a informação
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

let cat: AnimalClass = new AnimalClass('Cacau');
console.log(cat)
cat.nascer();
console.log(cat)
cat.crescer()
cat.morrer();
// cat.estaVivo = true ; //Se não houve o método SET, daria erro pois o estaVivo só retorna o valor de _estaVivo 
console.log(cat.estaVivo = true)
console.log(cat.estaVivo)


