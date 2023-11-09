import * as leitor from "readline-sync";

export class Calculadora {
    n1: number
    n2: number
    setValores(){
        this.n1 = leitor.question("Insira o m1: ")
        this.n2 = leitor.question("Insira o n2: ")
    }

    getMais(): number {return this.n1 + this.n2}
    getMenos(): number {return this.n1 - this.n2}
    getDividir(): number {return this.n1 / this.n2}
    getMultiplicar(): number {return this.n1 * this.n2}

}

function main(){
    let calc = new Calculadora()
    calc.setValores()
    console.log("A soma", calc.getMais );
    console.log("A subtração", calc.getMenos);
    console.log("A divisão", calc.getDividir);
    console.log("A multiplicação", calc.getMultiplicar);
    
}

main()