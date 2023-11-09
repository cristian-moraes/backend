import * as leitor from "readline-sync"

let menu: boolean = true
while (menu) {
    let option= leitor.question("Insira um numero correspondente a um mês, ou '0' para fechar")

    switch (option) {
        case 1:
            console.log("Janeiro");
            
            break;
        case 2:
            console.log("Fevereiro");
            
            break
        
        case 3:
            console.log("Março");
            
            break
        case 4:
            console.log("Abril");
            
        case 5:
            console.log("Maio");
            
            break;
        case 6:
            console.log("Junho");

            break
        case 7:
            console.log("Julho");

            break
        case 8:
            console.log("Agosto");

            break
        case 9:
            console.log("Setembro");

            break
        case 10:
            console.log("Outubro");

            break
        case 11:
            console.log("Novembro");

            break
        case 12:
            console.log("Dezembro");
        menu = false
            break
        case 0:
            console.log("Saindo");
            menu = false
            break
     default:
            
            
    }
}