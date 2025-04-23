// alogoritmo para pedir dois numeros de uma contagem e mostrar quais são pares

let numeroInicial = parseInt(prompt("Digite o número inicial da contagem!"));
let numeroFinal = parseInt(prompt("Digite o número final da contagem!"));

if(isNaN(numeroInicial) || isNaN(numeroFinal)){
    alert("Você não digitou um número, tente novamente !😅");
}

if(numeroInicial > numeroFinal){
    while (numeroFinal <= numeroInicial) {
        if(numeroFinal % 2 == 0){
            console.log(`O número ${numeroFinal} é par!`);
        }
        numeroFinal++;
    }
}else{
    while (numeroInicial <= numeroFinal) {
        if(numeroInicial % 2 == 0){
            console.log(`O número ${numeroInicial} é par!`);
        }
        numeroInicial++;
    }
}

