import * as leitor from "readline-sync"

export class Circulo{
    raio: Number;
    pi: Number = 3.14;

    constructor(raio: Number){
        this.raio = raio
    }

    getArea(){
        let area: Number = this.pi * (this.raio*this.raio)
        console.log(`O valor da area do circulo eh: ${area}`);
    }
}

export class Triangulo{
    base: Number;
    altura: Number;

    constructor(base: Number, altura: Number){
        this.base = base;
        this.altura = altura;
    }

    getArea(){
        let area: Number = (this.base * this.altura) / 2
        console.log(`O valor da area do triangulo eh: ${area}`);
    }
}

export class Retangulo{
    base: Number;
    altura: Number;

    constructor(base: Number, altura: Number){
        this.base = base;
        this.altura = altura;
    }

    getArea(){
        let area: Number = (this.base * this.altura)
        console.log(`O valor da area do retangulo eh: ${area}`);
    }
}