import * as leitor from "readline-sync"

export let menu: Boolean = true

while(menu){
    let option = leitor.questionInt("Informe um número de 1 a 5 ou 6 para sair")
    
    switch(option){
        case 1:
            console.log('Mensagem 1');
            break;
        case 2:
            console.log('Mensagem 2');
            break;
        case 3:
            console.log('Mensagem 3');
            break;
        case 4:
            console.log('Mensagem 4');
            break;
        case 5:
            console.log('Mensagem 5');
            break;
        case 6:
            console.log('Saindo!');
            break;
        default:
            console.log('Opção inexistente, tente novamente!');
            menu = false;
            break;
    }
}