import * as leitor from "readline-sync"

class Animal {
    public nome: String

    constructor (nome: String){
    this.nome = nome
    }

public emitirSom(): void{
    console.log(`Algum som de animal`);
    
    }
}

class Cachorro extends Animal {
   public emitirSom(): string {
    return `${this.nome} diz Woof!`;
    }
}

class Gato extends Animal {
    public emitirSom(): string {
    return `${this.nome} diz Meow!`;
    }
}

export class SistemaDeAnimais {
public cachorro: Array<Cachorro> = []
public gato: Array<Gato> = []
public animals: Array<Animal> = []


public cadastrarAnimal(): void{
   console.log(`1 - Animal com indentificação de espécie:`);
   console.log(`2 - Cachorro:`);
   console.log(`3 - Gato`);

   let animal = leitor.questionInt(`Informe o número referente ao animal que deseja cadastrar:`)
   switch(animal){
    case 1:
        let nome = leitor.questionInt(`Qual`)
   }
   
}

interagirAnimais(){

    console.log(`${animalSounds.nome} faz o som: ${animais.emitirSom()}`);
}
   

removerAnimal(): void{
    let nome = leitor.question("Informe o número do pet que irá ser removido: ");
    let animalIndex: Number = this.animals.findIndex(m => m.nome === nome)
    if (animalIndex) {
        this.animals.splice(index, 1)
        console.log(`Pet ${nome} removido`);            
    } else {
        console.log(`Pet ${nome} não removido, verifique o nome informado`);
    }
}

listarAnimais(): void {
        console.log('Listas de Animais:');
        this.animais.forEach((animais) => {
            console.log(`Nome: ${animais.nome}`);
            console.log(`Quantidade: ${animais.qtdEstoque}`);
        })
    }
}
