import * as leitor from "readline-sync"

export let menu: boolean = true
while (menu) {
    let opcao = leitor.questionInt("informe o código do produto: \n1 - camisa \n2 calça - \n3 - tenis \n0 - sair")

    switch (opcao) {
        case 1:
            console.log("Produto selecionado camisa \nValor: 150 " );
            
            break;
        case 2:
            console.log("sua opçaõ é: 2");
            

            break
        
        case 3:
            console.log("sua opção é: 3");
            

            break
        case 4:
            console.log('Saindo...');
            
            break
        default:
            console.log('Opção inexistente, tente novamente');
            
            break;
    }
}