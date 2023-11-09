import * as leitor from "readline-sync"

let menu: boolean = true
while (menu) {
    let option: String = leitor.question("Insira uma cor ou digite 'sair' para fechar").toLowerCase()

    switch (option) {
        case 'amarelo':
            console.log("me lembra o Brasil");
            
            
            break;
        case 'azul':
            console.log("me lembra o Grêmio");
            
        
            break
        case 'vermelho':
            console.log("me lembra a vergonha do inter");
            
            break
        case 'sair':
            menu = false

        default:
            break;
    }
}