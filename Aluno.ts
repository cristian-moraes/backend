import * as leitor  from "readline-sync";

export class Aluno {
    nome: string
    notas: Array<number> = []

    constructor( nome: string) {
        this.nome = nome

    }


    setNotas(n1: number, n2: number, n3: number){
        this.notas.push(n1)
        this.notas.push(n2)
        this.notas.push(n3)
    }

  
 getMedia(): number{
    let media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3
    return media
    }
}

function main(): void{
    let aluno = cadastro()
    console.log(aluno.getMedia);
    
}

function cadastro(): Aluno{
    let nome = leitor.question("Insira o nome do aluno")
    let aluno = new Aluno(nome)
    console.log("Aluno criado com sucesso");

    let n1 = leitor.questionFloat("Insira a 1° nota")
    let n2 = leitor.questionFloat("Insira a 2° nota")
    let n3 = leitor.questionFloat("Insira a 3° nota")
    return aluno
}

    
main()