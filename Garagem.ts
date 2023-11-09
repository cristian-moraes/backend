class Carro{
    marca: String;
    modelo: String;
    ano: Number;
    placa: String

    constructor(marca: String, modelo: String, ano: Number, placa: String){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.placa = placa
    
    }
}

export class Garagem(){
    carros: Array<Carro>
    constructor(){
        this.carro = []
    }
}

addCarro(){
    let marca = leitor.question("Informe a marca do seu carro")
    let modelo = leitor.question("Informe o modelo do seu carro")
    let ano = leitor.question("Informe o ano do seu carro")
    let placa = leitor.question("Informe a placa do seu carro")
    this.carros.push

}
