import * as leitor from "readline-sync"

export class Loja{
    nome: String;
    endereco: String;
    produtos: Array<String>;

    constructor(nome: String, endereco: String){
        this.nome = nome
        this.endereco = endereco
        this.produtos = []
    }

    setProdutos(){
        let nome = leitor.question("Informe o nome do produto: ")
        let marca = leitor.question("Informe o marca do produto: ")
        let produto = "Nome: "+ nome + ", Marca: " + marca
        this.produtos.push(produto)
        console.log(`O produto: ${produto} foi adicionado no estoque.`);
    }

    removerProdutos(){
        let remover = leitor.question("Informe o nome do produto para remover")
        let index = this.produtos.indexOf(remover)
        this.produtos.splice(index, 1)
    }

    getProdutos(){
        console.log(this.produtos);
    }

}

let empresa = new EmpresaDesenvolvimento("3KTI", "SENAC")
let menu = true
while(menu){
    let opt = leitor.questionInt("Digite: \n1 - Verificar funcionarios \n2 - Contratar funcionarios \n3 - Demitir funcionarios \n4 - Sair \n:")
    switch(opt){
        case 1:
            empresa.getEmpresa()
            break
        case 2:
            empresa.addFuncionario()
            break
        case 3:
            empresa.removerFuncionario()
            break
        case 4:
            console.log("Saindo.")
            menu = false
            break
    }
}