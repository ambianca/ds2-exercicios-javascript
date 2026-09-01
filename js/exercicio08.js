const numeroDigitado = Number(prompt("Digite um número:"));

if (isNaN(numeroDigitado)) {
    console.log("Número inválido");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numeroDigitado} x ${i} = ${numeroDigitado * i}`);
    }
}