interface UmaPessoa{
    nome: string
    idade: number
    documento: number
    falar(): string
    cantar(): string
    cumprimentar(nomeOutro: string, string): 
}

const pessoa: UmaPessoa {
    "nome": "teste"
    "idade", 10
    "documento", 
}

export class Funcionario implements UmaPessoa{
    nome: string
    idade: number
    documento: number
    constructor(nome: string, idade: number, documento: number)
    this.nome = nome
    this.idade = idade
    this.documento = documento 
}

public falar(): string
    return `Eu sou ${this.nome}`


public cantar(): string
    return `lala Estou cantando`


public cumprimentar(nomeOutro: string, string)
    return `Ola ${nomeOutro}, tudo bem?`