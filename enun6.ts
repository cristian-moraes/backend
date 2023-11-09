import * as leitor from "readline-sync"

let menu: boolean = true
while (menu) {
    let option: String = leitor.question("Escolha Carro, Onibus ou Bicicleta ou digite 'sair' para fechar").toLowerCase()

    switch (option) {
        case 'carro':
            console.log("velocidade média é: 80km/h");
            
            
            break;
        case 'onibus':
            console.log("velocidade média é: 60km/h");
            
        
            break
        case 'bicicleta':
            console.log("velocidade média é: 02km/h");
            
            break
        case 'sair':
            menu = false

        default:
            break;
    }
}