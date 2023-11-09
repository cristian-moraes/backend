import * as leitor from "readline-sync"

export class Pessoa{
    nome: String;
    cpf: Number;
    RG: Number;
    cor: String;
    idade: Number;

    constructor(nome: String, cpf: Number, RG: number, cor: String, idade: Number){
        this.nome = nome;
        this.cpf = cpf;
        this.RG = RG;
        this.cor = cor;
        this.idade = idade;
    }

    //CRIAR MÉTODOS PARA MOSTRAR OS ATRIBUTOS DO HUMANO 

    getNome(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }

    getCPF(){
        console.log("meu CPF é: ", this.cpf);
    }

    getRG(){
        console.log("meu RG é: ", this.RG);
    }

    getCor(){
        console.log("minha cor é: ", this.cor);
    }

    getIdade(){
        console.log("minha idade é: ", this.idade);
    }

    setNome(){
        let nomeDois = leitor.question("Insira o novo nome: ")
        this.nome = nomeDois
    }

    setCPF(){
        let cpfDois = leitor.questionInt("Insira o novo CPF: ")
        this.cpf = cpfDois
    }

    setRG(){
        let rgDois = leitor.question("Insira o novo RG: ")
        this.RG = rgDois
    }

    setCor(){
        let corDois = leitor.question("Insira a cor: ")
        this.cor = corDois
    }

    setIdade(){
        let idadeDois = leitor.question("Insira a idade: ")
        this.idade = idadeDois
    }
}

    