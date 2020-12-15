function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a proxima!')


/*
While
> É uma estrutura de repetição, baseada numa expreswsão verdadeiro ou falso. Enquanto for verdadeiro continua, quando for falso sai do laço. E é propria para executar laços que tem uma quantidade indeterminada de repetições.
*/ 