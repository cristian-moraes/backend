import * as leitor from "readline-sync"

let menu: boolean = true
while (menu) {
    let opcao = leitor.questionInt("Insira um numero de 1 a 3 ou 4 para sair")

    switch (opcao) {
        case 1:
            console.log("sua opção é: 1 " );
            
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