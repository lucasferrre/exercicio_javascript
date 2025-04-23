// Jogo de adivinhação - o computador escolhe um número entre 1 e 10

let numeroSorteado = Math.floor(Math.random() * 10) + 1;
let tentativas = 3;
let acertou = false;

alert("Tente adivinhar o número que estou pensando! É entre 1 e 10. Você tem 3 tentativas.");

for (let contador = 1; contador <= tentativas; contador++) {
    let palpite = parseInt(prompt(`Tentativa ${contador}: Digite seu palpite:`));

    if (isNaN(palpite)) {
        alert("Por favor, digite um número válido.");
        contador--; // não conta tentativa inválida
        continue;
    }

    if (palpite === numeroSorteado) {
        alert(`🎉 Parabéns! Você acertou o número ${numeroSorteado} na tentativa ${i}!`);
        acertou = true;
        break;
    } else if (palpite < numeroSorteado) {
        alert("O número é **maior** do que esse.");
    } else {
        alert("O número é **menor** do que esse.");
    }
}

if (!acertou) {
    alert(`😢 Que pena! Você não acertou. O número era ${numeroSorteado}.`);
}
